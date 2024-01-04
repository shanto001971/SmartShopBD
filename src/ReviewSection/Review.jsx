import Marquee from 'react-fast-marquee';

const Review = () => {
  return (
    <div style={{ boxShadow: '8px 4px 8px rgba(0, 0, 0, 0.1)' }} className="overflow-hidden rounded-md my-10 px-5 bg-slate-100">

      <div className="text-center my-5 p-5">
        <h1 className='lg:text-4xl text-xl font-bold'>Testimonials</h1>
        <p className='text-md'>Discover the stories of success and satisfaction from our valued clients. At Smart Shop BD, <br />  we are proud to share the experiences of those who have chosen our services. Your success story could be the next one we celebrate!</p>
      </div>


      <Marquee // Set width and height as needed
        speed={20}
        direction="left"
        gradientWidth={200}
        gradientColor="white"

      >
        <div className='flex gap-3 p-3'>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/1.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/2.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/4.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/6.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
        </div>

      </Marquee>
      <Marquee // Set width and height as needed
        speed={50}
        direction="right"
        gradientWidth={200}
        gradientColor="white"
        className='flex gap-5 p-3'
      >
        <div className='flex gap-3 p-3'>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/1.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/2.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/4.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/6.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
        </div>
      </Marquee>
      <Marquee // Set width and height as needed
        speed={30}
        direction="left"
        gradientWidth={200}
        gradientColor="white"
        className='flex gap-5 p-3'
      >
        <div className='flex gap-3 p-3'>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/1.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/2.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/4.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className='w-24'><img src="https://www.hover.dev/imgs/head-shots/6.jpg" alt="Movie" /></figure>
            <div className="p-3">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
            <p className='text-3xl mr-5 mt-2'>{`""`}</p>
          </div>
        </div>

      </Marquee>

    </div>
  );
};

export default Review;