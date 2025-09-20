import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <>
      <div>
        <h1 className=' text-xl font-extralight'>Landing Page</h1>
      </div>
      <Card />
      <Button
        title='Click'
        styles='bg-blue-500 text-white text sm rounded-sm'
      />
      <Button
        title='Click'
        styles='bg-blue-500 text-white text sm rounded-lg'
      />
      <Button
        title='Click'
        styles='bg-blue-500 text-white text sm rounded-full'
      />
    </>
  );
};
export default Landing;
