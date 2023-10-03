import Logo from '@/assets/Logo.png';


const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0 '>
                <img src={Logo} alt='logo' />
                <p className='my-5 '> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt tempore
                     non commodi sequi dolor porro quas aut, enim ducimus temporibus.</p>
                <p> Yirt All Right reserved</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className="font-bold">Links</h4>
                <p className='mt-5'>It's a link </p>
                <p className='mt-5'>It's a link #2</p>
                <p >It's a link #2</p>
            </div>
            <div>
                <h4 className="font-bold">Contact Us</h4>
                <p className='mt-5'>It's text empty </p>
                <p className='mt-5'>It's a link #2</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer