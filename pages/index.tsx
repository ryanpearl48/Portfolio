import { Card, Text } from "@nextui-org/react";

export const metadata = {
  title: 'Home Page'
};

const Home = () => {
  const InnerText = ({ text }: any) => {
    return (
      <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
        <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my Portfolio Website!
        </div>
      </header>
        <div className="max-w-lg m-auto">
          <p className="mb-4">
          </p>
          <p className="mb-4">
          </p>
          <p className="mb-12">
          </p>
        </div>
      <section
            className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
          >
        <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          Parralax inline
        </div>
      </section>
      <div className="max-w-lg m-auto">
        <p className="mb-4">
        </p>
        <p className="mb-4">
        </p>
        <p className="mb-4">
        </p>
      </div>
  </>
  );
};

export default Home;
