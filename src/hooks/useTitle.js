import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Prime XI`;
    }, [title])
};

export default useTitle;