// pages/api/formData.js

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers

    const formData = {
      userInfo: {
        sex: "",
        name: "",
        sexKana: "",
        nameKana: "",
        sexEnglish: "",
        nameEnglish: "",
        gender: "男性",
        dateOfBirth: "2000-01-01",
        studentClassification: "大学",
        disabilityClassification: "該当なし",
        myNumber: "",
        nationality: "日本"
      },
      options: {
        genderOptions: [
          { label: "男性", value: "男性" },
          { label: "女性", value: "女性" }
        ],
        studentClassificationOptions: [
          { label: "大学", value: "大学" }
        ],
        disabilityClassificationOptions: [
          { label: "該当なし", value: "該当なし" }
        ],
        nationalityOptions: [
          { label: "日本", value: "日本" }
        ]
      }
    };
  
    res.status(200).json(formData);
  }
  