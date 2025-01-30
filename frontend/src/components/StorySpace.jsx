import React from 'react'
import LoadingCircle from './LoadingCircle';

const StorySpace = ({ story, loading }) => {
    return (
        <div className='m-4 bg-amber-200 p-4 rounded-lg w-full max-w-2xl flex justify-center items-center'>
            {loading ? (
                <div className='w-20 h-20'>
                    <LoadingCircle />
                </div>
            ) : (
                <p>{story}</p>
            )}
        </div>
    );
};

export default StorySpace