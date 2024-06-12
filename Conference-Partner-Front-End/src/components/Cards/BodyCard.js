import Subtitle from "../Typography/Subtitle"

  
  function BodyCard({title, children, topMargin, TopSideButtons}){
      return(
          <div className={"card w-full p-4 bg-base-100 shadow-xl " + (topMargin || "mt-2")}>
              
              {/* <div className="divider mt-2"></div> */}
          
              {/** Card Body */}
              <div className='h-full w-full bg-base-100'>
                  {children}
              </div>
          </div>
          
      )
  }
  
  
  export default BodyCard