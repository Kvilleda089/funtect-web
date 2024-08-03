import React, {useState} from "react";
import userImage from '../img/user.jpg'


const CommentSection: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  const handleClick = (index: number) => {
    setRating(index + 1);
  };
  return (
    <>
      <section className="container-comment-section w-full p-4 bg-gray-100">
        <div className="container-description-client">
          <div className="information-client my-20">
            <h1 className="text-4xl my-1.5">What Clients Say</h1>
            <p className="text-2xl text-gray-500">Problems trying to resolve the conflict between</p>
            <p className="text-2xl text-gray-500">the two major realms of Classical physics: Newtonian mechanics</p>
          </div>
        </div>
  
        <div className="container-description-coments flex flex-col lg:flex-row lg:justify-between lg:space-x-4 items-center lg:items-start">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="comment-section flex-1 bg-white p-6 rounded-lg shadow-md mb-4 lg:mb-0">
              <div className="star-rating mb-4 flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 cursor-pointer ${index < (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(index)}
                  >
                    <path d="M12 2l2.39 4.83L20 8l-3.91 3.8L17.17 20 12 16.27 6.83 20l1.08-7.2L4 8l5.61-.17L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="comment mb-4">
                <p className="text-lg">Slate helps you see how many more days you need to work to reach your financial goal.</p>
              </div>
              <div className="information-perfil flex items-center">
                <div className="container-img">
                  <img src={userImage} alt="User" className="w-12 h-12 rounded-full" />
                </div>
                <div className="ml-4">
                  <h3 className="text-textColorButton text-xl">Regina Miles</h3>
                  <h3 className="text-gray-700 text-lg font-bold">Designer</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
   
}

export default CommentSection;