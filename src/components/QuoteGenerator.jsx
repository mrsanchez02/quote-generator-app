import React from 'react'
import useFetch from '../hooks/useFetch';
import Spinner from './Spinner';
import SocialMediaDropdown from './SocialMediaDropdown';

const QuoteGenerator = () => {

    const URL = 'https://api.quotable.io/random'

    const {response,error,isLoading,refetch} = useFetch(URL);
  
    if(isLoading) return <Spinner/>
  
    if(error) return console.log(error);

    return (
        <div className="card mt-5 bg-secondary text-white" style={{maxWidth: '40rem'}}>
            <div className="card-header">
                Quote:
            </div>
              <div className="card-body">
                    <blockquote className='blockquote mb-0'>
                        <p>{response?.content}</p>
                        <footer className="blockquote-footer text-white my-3">{response?.author}</footer>
                    </blockquote>
                    <div className="btn-group d-flex justify-center">
                        <button className='btn btn-light' onClick={refetch}>Generate</button>
                        <SocialMediaDropdown
                            response={response}
                        />
                    </div>
              </div>
        </div>

    )
}

export default QuoteGenerator