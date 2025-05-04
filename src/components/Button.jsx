export const Button = ({ link, btn }) => {
  return (
    <a
      href={link}
      className="bg-fav/50 backdrop-blur-3xl text-white px-8 py-2 rounded-lg font-bold hover:bg-primary/80 hover:text-cyan-100 transition-colors duration-300 md:text-xl"
    >
      {btn}
    </a>
  );
};
