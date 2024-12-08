export const Timeline = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center text-primary">Timeline to Launch</h3>
        <div className="space-y-8">
          <div className="flex items-center space-x-4">
            <div className="w-24 font-bold text-primary">Now</div>
            <div className="flex-1 p-4 bg-primary-light rounded-lg">Join Waitlist</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-24 font-bold text-primary">Dec 2024</div>
            <div className="flex-1 p-4 bg-primary-light rounded-lg">Select 5 businesses & begin refinement</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-24 font-bold text-primary">Jan 2025</div>
            <div className="flex-1 p-4 bg-primary-light rounded-lg">Official Launch</div>
          </div>
        </div>
      </div>
    </section>
  );
};