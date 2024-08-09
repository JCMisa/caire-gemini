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

const AddAssessment = () => {
    const [loading, setLoading] = useState(false)
    const [illness, setIllness] = useState()
    const [level, setLevel] = useState()

    const onCreateAssessment = async () => {
        setLoading(true)
        console.log(illness, level);
        setLoading(false)
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild className="hidden sm:flex">
                    <div className="bg-primary min-h-[100px] p-10 rounded-md items-center flex flex-col cursor-pointer hover:shadow-md transition-all">
                        <h2 className="text-3xl">+</h2>
                        <h2>Create New Assessment</h2>
                    </div>
                </DialogTrigger>
                <DialogTrigger asChild className="block sm:hidden">
                    <div className="flex float-end justify-center sm:hidden w-14 h-14 items-center rounded-full bg-primary cursor-pointer">
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