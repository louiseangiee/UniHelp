import React, { useState ,useEffect} from 'react';
import NavbarMain from '../components/NavbarMain';
import SidebarHome from '../components/SidebarHome';
import Footer from '../components/Footer';
// import Services from '../components/Services';
// import SchoolTabs from '../components/SchoolTabs';
import { IntroMyUni, ChooseUni } from '../components/ChooseUni';
import toast, { Toaster } from 'react-hot-toast';
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("localStorage");


function MainPage() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => { 
    while(ReactSession.get("isLoggedin")){
    toast.success('You have successfully signed in') 
    ReactSession.set("isLoggedin", false)
    }
  }, console.log('error'));

  useEffect(() => { 
    while(ReactSession.get("isSignedup")){
    toast.success('You have successfully created an account') 
    ReactSession.set("isSignedup", false)
    }
  }, console.log('error'));





  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 2000,
          },
          style: {
            border: '2px solid #5271ff',
            padding: '16px',
          },
        }}
      />
      <SidebarHome isOpen={isOpen} toggle={toggle} />
      <NavbarMain toggle={toggle} />
      {/* <SchoolTabs /> */}
      {/* <IntroMyUni /> */}
        <div style={{position: "relative", overflow: "scroll" }}>
          <div className="row">
          <ChooseUni />
        </div>
        <div className="row" style={{bottom:0, position: "bottom"}}>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MainPage;