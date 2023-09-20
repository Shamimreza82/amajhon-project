import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const errorPage = useRouteError()
    console.log (errorPage)
    return (
        <div >
            <div className='flex justify-center items-center min-h-screen'>
            <p>{errorPage.statusText || errorPage.massage}</p>
            </div>
            
            <div>
            {
                errorPage.status === 404 && <div> 
                    
                    <Link className='bg-slate-200 p-2' to='/products'> Go Back</Link>
                     </div>
            }
            </div>

        </div>
    );
};

export default ErrorPage;