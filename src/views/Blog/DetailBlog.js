import { useParams, useNavigate } from "react-router-dom";

const DetailBlog = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const handleBackData = () => {
        navigate("/blog");
    };

    // console.log(">>> check use param: ", useParams());

    return (
        <>
            <div>
                {" "}
                <span onClick={handleBackData}>&lt;-- Back </span>
            </div>
            <h1> Hello detail blogs with id = {id}</h1>
        </>
    );
};

export default DetailBlog;
