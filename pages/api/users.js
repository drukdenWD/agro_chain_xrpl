
import connectMongoDB from "../../libs/mongodb";
import Information from "../../models/info";

export default async function apiHandler(req, res) {
   
    const { method } = req;
  
    if (method === 'POST') {
      await handlePOST(req, res);
    } else if (method === 'GET') {
      await handleGET(req, res);
    } else if (method === 'DELETE') {
      await handleDELETE(req, res);
    } else if (method === 'PUT') {
      await handlePUT(req, res);
    }
  
  
}

async function handlePOST(req) {
  const { cropname, cropid, cid, pnumber, address } = req.body;
  await connectMongoDB();
  await Information.create({ cropname, cropid, cid, pnumber, address });
  return {
    status: 201,
    body: { message: "Information created" },
  };
}

async function handleGET(req, res) {
  try {
    await connectMongoDB();
    const informations = await Information.find();
    res.status(200).json({ informations });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleDELETE(req) {
  const { id } = req.query;
  await connectMongoDB();
  await Information.findByIdAndDelete(id);
  return {
    status: 201,
    body: { message: "Information deleted" },
  };
}

async function handlePUT(req) {
  const { id } = req.query;
  const { cropname, cropid, cid, pnumber, address } = req.body;
  
  try {
    await connectMongoDB();
    const updateData = {
      cropname,
      cropid,
      cid,
      pnumber,
      address,
    };
    const updatedInformation = await Information.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedInformation) {
      return {
        status: 404,
        body: { message: "Information not found" },
      };
    }

    return {
      status: 200,
      body: { message: "Information updated", data: updatedInformation },
    };
  } catch (error) {
    return {
      status: 500,
      body: { message: "Internal server error", error: error.message },
    };
  }
}
