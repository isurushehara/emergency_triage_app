const { OpenRouter } = require('@openrouter/sdk');

const openrouter = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const analyzePatient = async (req, res) => {

  try {

    const {
      symptoms,
      oxygen,
      heartRate,
      age,
    } = req.body;

    const prompt = `
You are an emergency medicine AI assistant.

Analyze this patient carefully.

Patient Details:
- Symptoms: ${symptoms}
- Oxygen Level: ${oxygen}
- Heart Rate: ${heartRate}
- Age: ${age}

Provide:
1. Risk Level
2. Emergency Recommendation
3. Short Explanation

Keep the response short, professional, and easy to understand.

IMPORTANT:
This system is only for emergency decision support and not a final diagnosis.
`;

    let aiResponse = '';

    // Fallback models
    const models = [

      'openrouter/free',
    ];

    // Try models one by one
    for (const modelName of models) {

      try {

        console.log(`Trying model: ${modelName}`);

        const stream =
          await openrouter.chat.send({

            chatRequest: {

              model: modelName,

              messages: [
                {
                  role: 'system',
                  content:
                    'You are a professional emergency triage assistant.',
                },
                {
                  role: 'user',
                  content: prompt,
                },
              ],

              stream: true,
            },

          });

        // Clear previous response
        aiResponse = '';

        for await (const chunk of stream) {

          const content =
            chunk.choices?.[0]?.delta?.content;

          if (content) {
            aiResponse += content;
          }
        }

        // Success
        console.log(
          `Success with model: ${modelName}`
        );

        break;

      } catch (modelError) {

        console.log(
          `Model failed: ${modelName}`
        );

        console.log(modelError.message);

        // Wait 3 seconds before next model
        await new Promise(resolve =>
          setTimeout(resolve, 3000)
        );
      }
    }

    // If all models fail
    if (!aiResponse) {

      aiResponse =
        'AI service is currently busy. Please try again in a few moments.';
    }

    res.json({
      success: true,
      result: aiResponse,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: 'AI analysis failed',
    });
  }
};

module.exports = {
  analyzePatient,
};