import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { DocumentType } from "../assets/types/DocumentType"
import { useDocumentFullView } from "./useDocumentFullView"

export const useDocumentFromStorage = () =>{

    const { _id } = useParams(),
          navigate = useNavigate(),
          { getFullViewDocument } = useDocumentFullView(),
          [document, setDocument] = useState<DocumentType | null>(null)


    useEffect(() =>{

        const timer = setTimeout(() =>{

            const doc = getFullViewDocument()

            if(!doc || doc._id !== _id){

                navigate(-1)

            }else{

                setDocument(doc)

            }

        }, 100)

        return () =>{

            clearTimeout(timer)

        }

    }, [_id, getFullViewDocument, navigate])

    return { document }

}