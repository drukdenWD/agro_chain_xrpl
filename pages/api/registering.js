
import { register } from "module";
import connectMongoDB from "../../libs/mongodb";
import registerInfo from "../../models/register";

export default async function apiHandler(req, res) {
   
    const { method } = req;
  
    if (method === 'POST') {
      await handlePOST(req, res);
    } else if (method === 'GET') {
      await handleGET(req, res);
    } else if (method === 'DELETE') {
      await handleDELETE(req, res);
    } 
  
  
}

async function handlePOST(req, res) {
    const { username, email, password, confirmpassword, wallet } = req.body;
    await connectMongoDB();
  
    try {
        // Registration code
        await registerInfo.create({ username, email, password, confirmpassword, wallet });
        res.status(200).json({ message: 'Registration successful' });
      } catch (error) {
        console.error(error); // Log the error to the console for debugging
        res.status(500).json({ error: 'Registration failed', details: error.message });
      }
      
  }
  
  

async function handleGET(req, res) {
  try {
    await connectMongoDB();
    const registerings = await registerInfo.find();
    res.status(200).json({ registerings });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleDELETE(req) {
  const { id } = req.query;
  await connectMongoDB();
  await registerInfo.findByIdAndDelete(id);
  return {
    status: 201,
    body: { message: "registered details deleted" },
  };
}

