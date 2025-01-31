import React from "react";

function Card({username}) {
         console.log(username); //as Card is function when that excutes it creates props that is object ao we create desturing of card and it is seen as this
         
             
    return(
        <>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img
          className="w-full"
          src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Card Image"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{username} Card</h2>
          <p className="text-gray-700 text-base">
             This is a simple card with an image, title, and description.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #Tailwind
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #React
          </span>
        </div>
      </div> 
        </>
    )
}

export default  Card