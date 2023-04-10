import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-2NQsrBHc241eP2U3w57BDcxW",
    apiKey: process.env.OPEN_API_KEY,
});
console.log("config", configuration)
const openai = new OpenAIApi(configuration);
export default async (req, res) => {
    try{
        console.log("req", req.body)
        if (req.body.prompt !== undefined) {
            console.log("here")
            const completion = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `suggest a ${req.body.format} related to ${req.body.prompt} with link to poster starting with // and name starting witb // & give synopsis starting with // and a link where to watch starting with //` ,
            });
        
            res.status(200).json({ text: completion });
          } else {
            res.status(400).json({ text: "No prompt provided." });
          }
    } catch(err){
        console.log("err", err)
        res.status(400).json({ text: "No prompt provided." });
    }
 
  };