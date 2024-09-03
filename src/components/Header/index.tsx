import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FaPinterestP, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from '../Logo';
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import SubmitButton from "../SubmitButton";

const Header = () => {
  const [user, setUser] = useState<string | null>(null);
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      return user ? setUser(user.uid) : setUser(null);      
    })
    return () => unsubscribe();
  }, [user, auth]);

  const handleLoginClick = () => {
    return user 
      ? signOut(auth).then(() => {
        setUser(null);
      })
      : navigate('/login');
  };

  const handleChangeModal = () => {
    setSearchModal(!searchModal);
  };

  return <header className='w-full flex flex-col items-center'>
    <div className='w-full flex justify-between px-10 py-1 text-brand_1 bg-gray-100'>
      <p className='flex gap-4 text-body'>
        <span className='border-r border-brand_1 pr-4'>(000)999-898-999</span>
        <span>info@trisog.com</span>
      </p>
      <nav className='flex items-center justify-between w-36'>
        <a href="https://x.com/home" target='_blank'><FaTwitter size={14}/></a>
        <a href="https://www.linkedin.com/" target='_blank'><FaLinkedinIn size={14}/></a>
        <a href="https://www.google.com.br/" target='_blank'><FaGoogle size={14}/></a>
        <a href="https://br.pinterest.com/" target='_blank'><FaPinterestP size={14}/></a>
        <span className='flex items-center hover:cursor-pointer'>
          EUR
          <IoIosArrowDown size={14}/>
        </span>
      </nav>
    </div>
    <div className='flex w-full px-10 py-4 justify-between font-title font-normal items-center'>
      <nav className='flex justify-between w-[55%] items-center text-h6 font-medium text-brand_1'>
        <Logo />
        <Link to="/" className='hover:underline decoration-brand_2 underline-offset-4'>Home</Link>
        <Link to="#" className='hover:underline decoration-brand_2 underline-offset-4'>About</Link>
        <Link to="/tour" className='hover:underline decoration-brand_2 underline-offset-4'>Tours</Link>
        <Link to="#" className='hover:underline decoration-brand_2 underline-offset-4'>Destination</Link>
        <Link to="#" className='hover:underline decoration-brand_2 underline-offset-4'>Blog</Link>
        <Link to="#" className='hover:underline decoration-brand_2 underline-offset-4'>Pages</Link>
        <Link to="#" className='hover:underline decoration-brand_2 underline-offset-4'>Contact</Link>
      </nav>
      <div className='flex text-brand_1 gap-4'>
        <button type='button' onClick={handleChangeModal}>
          <BiSearch size={24}/>
        </button>
        <button className='flex font-bold gap-2' onClick={handleLoginClick}>
          <FiUser size={24}/>
          {user ? "Logout" : "Login / SignUp"}
        </button>
      </div>
    </div>
    {searchModal && <InputModal />}
    
  </header>
};

const InputModal = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/tour?search=${search}`);
  };

  return <div className="w-full flex bg-surface gap-4 items-center py-6 px-32">
    <InputField 
      key="InputFieldModal"
      Icon={BiSearch} 
      placeholder="Where to go?" 
      type="text" 
      value={search}
      onChange={handleChange}
      size="large"
    />
    <SubmitButton 
      text="Submit"
      size="very small"
      onClick={handleSubmit}
    />
  </div>
};


export default Header;