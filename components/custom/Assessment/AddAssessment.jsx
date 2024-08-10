"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { db } from '@/utils/db';
import { Assessment, Result } from '@/utils/schema';
import moment from 'moment';
import { useUser } from '@clerk/nextjs';
import { chatSession } from '@/utils/gemini';
import { v4 as uuidv4 } from 'uuid';

const AddAssessment = ({ refreshData }) => {
    const { user } = useUser();

    const [geminiResponse, setGeminiResponse] = useState()
    const [loading, setLoading] = useState(false)
    const [illness, setIllness] = useState()
    const [level, setLevel] = useState()

    const onCreateAssessment = async () => {
        setLoading(true)
        try {
            const randomGeneratedStringId = uuidv4();

            const result = await db.insert(Assessment).values({
                illness: illness,
                level: level,
                resolved: false,
                createdAt: moment().format("MM-DD-yyyy"),
                createdBy: user?.primaryEmailAddress?.emailAddress,
                resultReferenceId: randomGeneratedStringId
            })
            if (result) {
                toast(
                    <p className='text-sm font-bold text-green-500'>Assessment added successfully</p>
                )
                refreshData(); // get the new set of assessment list real time

                const prompt = `Illness: ${illness}, level: ${level}, based on the illness and level, generate a json response with properties symptoms with values of list of strings, medicines with values of list of strings, and advice with value of 5 sentences string for the said illness and severity level. Make sure that the response is only the JSON response.`

                const aiResponse = await chatSession.sendMessage(prompt);

                const response = aiResponse.response
                    .text()
                    .replace("```json", "")
                    .replace("```", "");

                if (response) {
                    const data = await db.insert(Result).values({
                        assessmentReferenceId: randomGeneratedStringId,
                        aiResult: response
                    }).returning({ aiResult: Result?.aiResult })
                    console.log("assessment result: ", data[0]);
                    setGeminiResponse(data[0])
                }
            }
        } catch (error) {
            toast(
                <p className='text-sm font-bold text-red-500'>Internal error occured while adding assessment</p>
            )
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild className="hidden sm:flex">
                    <div className="linear-bg min-h-[100px] p-10 rounded-md items-center flex flex-col cursor-pointer hover:shadow-md transition-all">
                        <h2 className="text-3xl">+</h2>
                        <h2>Create New Assessment</h2>
                    </div>
                </DialogTrigger>
                <DialogTrigger asChild className="block sm:hidden">
                    <div className="flex absolute top-0 right-0 float-end justify-center sm:hidden w-14 h-14 items-center rounded-full linear-bg cursor-pointer">
                        <h2 className="text-3xl">+</h2>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Assessment</DialogTitle>
                        <DialogDescription>
                            <div className="mt-5">
                                <h2 className="text-light font-medium my-1">Assessment Name</h2>
                                <Input
                                    required
                                    placeholder="e.g Headache"
                                    onChange={(e) => setIllness(e.target.value)}
                                    className="focus:border-primary focus:ring-2 focus:ring-primary-100"
                                />
                            </div>
                            <div className="mt-5">
                                <h2 className="text-light font-medium my-1">Severity Level</h2>
                                <Select
                                    onValueChange={setLevel}
                                >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Severity Level" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-dark-200 text-white focus:border-primary focus:ring-2 focus:ring-primary-100">
                                        <SelectItem className="cursor-pointer" value="mild">Mild</SelectItem>
                                        <SelectItem className="cursor-pointer" value="moderate">Moderate</SelectItem>
                                        <SelectItem className="cursor-pointer" value="severe">Severe</SelectItem>
                                    </SelectContent>
                                </Select>

                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <Button
                                onClick={() => onCreateAssessment()}
                                className="mt-5 w-full"
                                disabled={!(illness && level)}
                            >
                                {loading ? (
                                    <LoaderCircle className='animate-spin' />
                                ) : (
                                    "Add Assessment"
                                )}
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddAssessment