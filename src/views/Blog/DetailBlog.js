import { useParams, useNavigate } from "react-router-dom";
import "./Blog.scss";
import useFetch from "../../customize/fetch";

const DetailBlog = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    const handleBackData = () => {
        navigate("/blog");
    };

    const {
        data: dataBlogDetail,
        isLoading,
        isError,
    } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

    // console.log(">>> check use param: ", useParams());

    return (
        <>
            <div>
                {" "}
                <span onClick={handleBackData}>&lt;-- Back </span>
            </div>
            <h1> Hello detail blogs with id = {id}</h1>
            <div className="blog-detail">
                {dataBlogDetail && (
                    <>
                        <div className="title">
                            Blog ID: {id} ---{" "}
                            {isLoading === true
                                ? "Loading data ..."
                                : dataBlogDetail.title}
                        </div>
                        <div className="content">{dataBlogDetail.body}</div>
                    </>
                )}
            </div>
        </>
    );
};

export default DetailBlog;
