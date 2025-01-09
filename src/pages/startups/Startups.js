import React, {useEffect, useState} from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar';
import { FaCar, FaCheck, FaCheckCircle, FaCheckDouble, FaEllipsisV, FaEye, FaFileExcel, FaFilter, FaMinusCircle, FaPlusCircle, FaRecycle, FaSpinner, FaThumbsUp, FaUser, FaUserAlt, FaUserMd} from "react-icons/fa";
import axios from 'axios';
import profile from '../../assets/images/Nandhinimamtraktor.png';
import { FaGears, FaIndianRupeeSign } from 'react-icons/fa6';
import StackedHorizontalBarChart from '../../components/HorizontalChart';
import '../../components/styles/style.css';
import toast from 'react-hot-toast';
function Startups() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetchData();
    })
    const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:3003/api/v1/view');
          setData(response.data.rows); // Assuming your data is in response.data.rows
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])
    const[startupsData, setStartupsData] = useState([])
    const [currentPage, setCurrentPage] = useState(1); 
    const [rowsPerPage, setRowsPerPage] = useState(5); 
    const UpdatedFundingData = async() => {
        try
        {
            const result = await axios.get('http://localhost:3003/api/v1/fetch-startup');
            setStartupsData(result.data.rows)
        }
        catch(err)
        {
          console.log(err);
        }
      }
      useEffect(()=> {
        UpdatedFundingData()
      }, [])
      const indexOfLastMentor = currentPage * rowsPerPage;
      const indexOfFirstMentor = indexOfLastMentor - rowsPerPage;
      const currentMentors = startupsData.slice(indexOfFirstMentor, indexOfLastMentor);
      const totalPages = Math.ceil(startupsData.length / rowsPerPage);
        const handleNextPage = () => {
            if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            }
        };
        const handlePreviousPage = () => {
            if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            }
        };
        const [status, setStatus] = useState('');
        const[loading, setLoading] = useState(true);
        const handleGraduate = async(official_email_address) => {
            //setStatus('Graduated');
            setLoading(true);
            try
            {
                const result = await axios.put(`http://localhost:3003/api/v1/update-status?startup_status=Graduated&official_email_address=${official_email_address}`);
                if(result)
                {
                    toast.success('Status Marked as graduated');
                    UpdatedFundingData()
                }
            }
            catch(err)
            {
                toast.error('Unknow error occured!')
            }
            finally {
                setLoading(false)
            }
        };

        const handleDrop = async(official_email_address) => {
            //setStatus('Dropped');

            try
            {
                const result = await axios.put(`http://localhost:3003/api/v1/update-status?startup_status=Dropped&official_email_address=${official_email_address}`);
                if(result)
                {
                    toast.success('Status Marked as dropped')
                }
            }
            catch(err)
            {
                toast.error('Unknow error occured!')
            }
        };

        const handleActive = async(official_email_address) => {
            try
            {
                const result = await axios.put(`http://localhost:3003/api/v1/update-status?startup_status=Active&official_email_address=${official_email_address}`);
                if(result)
                {
                    toast.success('Status Marked as active')
                }
            }
            catch(err)
            {
                toast.error('Unknow error occured!')
            }
        }
  return (
    <div className="h-screen flex">
                    <section id="SideBar" className="fixed h-full">
                        <SideBar />
                    </section>
                    <section className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                        <div className="flex justify-between">
                                <h1 className="p-0 text-3xl font-semibold text-gray-500">Startups</h1>
                                <a href={'/addstartup'} className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md text-white" style={{backgroundColor: '#0b5f66'}}>Add new Startup</a>
                        </div>
                        <h1 className="p-0 text-lg text-gray-500 mt-1 ms-1  ">Analytics</h1>
                            <div className={`flex justify-center items-center content ${show ? "visible": ""}`}>
                                <div className="shadow-md rounded-sm mt-10 border flex justify-center items-center md:w-[95%]">
                                    <div className="mt-10 mb-10  border-0 border-t-0  md:w-[95%]">
                                    <div className="bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Profile Card */}
          <div className="flex-1 bg-gray-50 p-4 rounded-lg border">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>
                <h1 className="text-xl font-semibold">Seat of Joy</h1>
                <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">Active</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700 text-sm"><strong>Email:</strong> ed19b063@mail.iitm.ac.in</p>
              <p className="text-gray-700 text-sm"><strong>Phone:</strong> +91 98400 46978</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm font-medium">Project Timeline</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="flex-1 bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <span className="text-sm text-gray-600">Step 01</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Problem Validation</p>
              <button className="mt-2 text-blue-600 font-medium text-sm hover:underline">View</button>
            </div>
          </div>

          {/* About Us Section */}
          <div className="flex-1 bg-gray-50 p-4 rounded-lg border">
            <h2 className="text-lg font-semibold mb-2">About Us</h2>
            <p className="text-gray-700 text-sm">
              Our Seat of Joy manufactures a child safety seat for motorcycles that protects a child during accidents. Our seat, along with protecting the child, is also slidable, foldable, and convertible into a storage box.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
              <div><strong>Startup Type:</strong> Hardware</div>
              <div><strong>Sector:</strong> Automotive</div>
              <div><strong>Program:</strong> Nirmaan</div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Awards & Recognitions</h2>
            <button className="text-blue-600 font-medium text-sm hover:underline">+</button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium">Award/ Recognition Name</h3>
                <p className="text-gray-600 text-sm">Award/ Recognition Org - Awarded Date</p>
                <p className="text-gray-600 text-sm mt-1">Description</p>
              </div>
              <button className="text-blue-600 font-medium text-sm hover:underline">Edit</button>
            </div>
            <div className="mt-4">
              <a href="#" className="flex items-center gap-2 text-blue-600 text-sm hover:underline">
                <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF Icon" className="w-4 h-4" />
                Document Name.pdf
              </a>
            </div>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg border grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 text-sm"><strong>Mentors:</strong> Not Associated</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><strong>Cohort (Name):</strong> Jan</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><strong>Cohort (Year):</strong> 2023</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><strong>CIN/ Registration Number:</strong> -</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><strong>Industry:</strong> Automobiles & Self-Driving Assistances</p>
          </div>
          <div>
            <p className="text-gray-700 text-sm"><strong>Technology:</strong> -</p>
          </div>
        </div>

      </div>
    </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <h1 className="text-3xl text-gray-500 font-semibold mt-3">Sectors</h1> */}
                            {/* <div className={`grid md:grid-cols-5 gap-2 mt-3 pb-2 content ${show ? "visible": ""}`}>
                                        <a href="/industrystartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md font-semibold rounded-lg w-[100%;] text-gray-600" style={{backgroundColor: '#afdade'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Industry 4.0</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaGears size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#afd5de'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Healthcare</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaUserMd size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#afcdde'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Sustainability</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaRecycle size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a href="/fintechstartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#97bfcc'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>FinTech</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaIndianRupeeSign size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a href="/mobilitystartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#7dada3'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Mobility</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaCar size={45}/></div>
                                                    </div>  
                                            </div>
                                        </a>
                            </div> */}
                        </div>
                    </section>
    </div>
  )
}
export default Startups;