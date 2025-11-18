import { TestPanelType } from "../../../../../../../assets/types/LabTestType"

interface TestOrderedProps{

    tests: TestPanelType[] | string[] | undefined

}

const TestOrdered: React.FC<TestOrderedProps> = ({ tests })=>{
    
    if(!tests || tests.length === 0){

        return(
            
            <p className="text-gray-600 text-sm italic">No specific tests listed.</p>

        )

    }

    return(

        <ul className="list-disc list-inside space-y-1 pl-2">

            {

                tests.map((test, index)=>{

                    return(

                        <li key={index} className="text-sm text-gray-600">{test}</li>

                    )

                })

            }

        </ul>

    )

}

export default TestOrdered