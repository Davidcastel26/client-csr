import { useNavigation } from "react-router-dom"


export const SubmitBtn = ({ text }) => {

    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'

  return (
    <button 
        type="submit"
        className="btn btn-primary btn-block"
        disabled={isSubmitting}
    >
        {
            isSubmitting 
            ? <>
             <sapn className="loading loading-spinner"></sapn>
             sending...
            </>
            : text || 'submit'
        }
    </button>
  )
}
