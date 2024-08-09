import React from 'react'
import AddAssessment from './AddAssessment'

const AssessmentList = () => {
    return (
        <div className="mt-7">
            <div className="grid grid-cols-1 gap-5">
                {/* <CreateBudget refreshData={() => getBudgetList()} /> */}
                <AddAssessment />
                {/* {budgetList.length > 0 ? budgetList.map((budget) => (
                    <div key={budget.id}>
                        <BudgetItem budget={budget} />
                    </div>
                )) : [1, 2, 3].map((item, index) => (
                    <div key={index} className="w-full bg-dark rounded-lg h-[150px] animate-pulse">

                    </div>
                ))}
                <Button className="fixed bottom-3 right-3" onClick={() => getBudgetList()}>Refresh</Button> */}
            </div>
        </div>
    )
}

export default AssessmentList