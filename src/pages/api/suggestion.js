import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-fsmuhNX1qfmr7j8tqofNLDBZ",
    apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);
export default async (req, res) => {
    try{
        console.log("req", req.body)
        if (req.body.prompt !== undefined) {
            console.log("here")
            const completion = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: `suggest a ${req.body.format} related to ${req.body.prompt} with link to image from wikipedia between "^^" and name between "^^" & synopsis between "^^" & a link where to watch between "^^"` ,
              temperature: 0.9,
              max_tokens: 2000,
              top_p: 1,
              frequency_penalty: 0.0,
              presence_penalty:0.6,
           
            });
        console.log("completion", completion.data.choices[0].text)
            res.status(200).json({ text: completion.data.choices[0].text });
          } else {
            res.status(400).json({ text: "No prompt provided." });
          }
    } catch(err){
        console.log("err", err)
        res.status(400).json({ text: "No prompt provided." });
    }
 
  };