exports.Iframe = async (req, res) => {

  try {
      res.render("Ejs/Ifarme",);
  } catch (error) {
      console.log(error);
  }
};


const oldData=[{
    "_id": {
      "$oid": "6597ca7f0a49813b8021090a"
    },
    "title": "Segregation - Reporting of segregated client collateral balances by CC",
    "description": "Daily basis (T day report to be uploaded to NCL on T+1 till 11.59 to ICCL)\n",
    "start_date": "20240105",
    "expiry_date": "20250131",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "65a102c481a0ee89930bb514"
        },
        "checker": {
          "$oid": "65a1026f81a0ee89930bb50d"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "FX/MCX/CASH - file creation",
        "status": 1,
        "_id": {
          "$oid": "6597ca7f0a49813b8021090b"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240528"
  },
  {
    "_id": {
      "$oid": "6597cbbc0a49813b802109c0"
    },
    "title": "Daily submission of Holding Statement - All exchanges",
    "description": "Before 12 p.m. on the following trading day\n",
    "start_date": "20240105",
    "expiry_date": "20250131",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "11:00:00",
    "external_time": "12:00:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [
          {
            "filename": "20240530051300-Acknowledgement for submission of Holding Statement - Declaration (Member No_  - 6783).msg",
            "userId": {
              "$oid": "659e6d94fdc67c1754994b6a"
            }
          },
          {
            "filename": "20240530051309-Submission of holding statement for 57035 for As on date 29 May 2024.msg",
            "userId": {
              "$oid": "659e6d94fdc67c1754994b6a"
            }
          }
        ],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 1,
        "submission_status": 1,
        "message": "BSE and MCX - NIL Holding",
        "status": 1,
        "_id": {
          "$oid": "6597cbbc0a49813b802109c1"
        }
      }
    ],
    "fileId": [],
    "completed_status": 1,
    "completed_date": "20240530"
  },
  {
    "_id": {
      "$oid": "6597ccb20a49813b802109d1"
    },
    "title": "Daily MTF File Uploading (MTR File)",
    "description": "Before 12 p.m. on the following trading day\n",
    "start_date": "20240105",
    "expiry_date": "20250131",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "11:00:00",
    "external_time": "12:00:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a347b510d6c383eb767f"
        },
        "files": [
          {
            "filename": "20240530075827-MTR_29052024.T01",
            "userId": {
              "$oid": "659e525afe0688f294056ec6"
            }
          },
          {
            "filename": "20240530080819-Submission_Screenshot_29052024.docx",
            "userId": {
              "$oid": "659e525afe0688f294056ec6"
            }
          }
        ],
        "maker": {
          "$oid": "659e525afe0688f294056ec6"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e525afe0688f294056ec6"
        },
        "checker_status": 1,
        "submission_status": 1,
        "message": "Before 12 p.m. on the following trading day",
        "status": 1,
        "_id": {
          "$oid": "6597ccb20a49813b802109d2"
        }
      }
    ],
    "fileId": [],
    "completed_status": 1,
    "completed_date": "20240530"
  },
  {
    "_id": {
      "$oid": "6597cfa04cf7848fd46eef2f"
    },
    "title": "Client Margin Reporting- All Segments",
    "description": "Within five days from trade date\n",
    "start_date": "20240105",
    "expiry_date": "20250131",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a347b510d6c383eb767f"
        },
        "files": [
          {
            "filename": "20240530071057-Margin Reporting_29052024.docx",
            "userId": {
              "$oid": "659e5187fe0688f294056ebf"
            }
          }
        ],
        "maker": {
          "$oid": "659e5187fe0688f294056ebf"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e5187fe0688f294056ebf"
        },
        "checker_status": 1,
        "submission_status": 0,
        "message": "Within five days from trade date",
        "status": 1,
        "_id": {
          "$oid": "6597cfa04cf7848fd46eef30"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240529"
  },
  {
    "_id": {
      "$oid": "6597d0870a49813b802109fb"
    },
    "title": "Cross Obligated Bill",
    "description": "every day\n",
    "start_date": "20240105",
    "expiry_date": "20250131",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a347b510d6c383eb767f"
        },
        "files": [
          {
            "filename": "20240530073412-_Cross_Balance_Transfer_to_As_Per_Setting_-_CASH_[Both_Exchange]_As_on_30-05-2024.XLS",
            "userId": {
              "$oid": "659e5187fe0688f294056ebf"
            }
          }
        ],
        "maker": {
          "$oid": "659e5187fe0688f294056ebf"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e5187fe0688f294056ebf"
        },
        "checker_status": 1,
        "submission_status": 0,
        "message": "On daily basis",
        "status": 1,
        "_id": {
          "$oid": "6597d0870a49813b802109fc"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240529"
  },
  {
    "_id": {
      "$oid": "6597d0f40a49813b80210a25"
    },
    "title": "Pay in of Funds",
    "description": "before 11 am on daily basis",
    "start_date": "20240105",
    "expiry_date": "20250131",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "11:00:00",
    "external_time": "12:00:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a310b510d6c383eb7673"
        },
        "files": [],
        "maker": {
          "$oid": "659e4e5ffe0688f294056eb8"
        },
        "checker": {
          "$oid": "659e63fdf584097e248f79e2"
        },
        "submission": {
          "$oid": "659e63fdf584097e248f79e2"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "Payin of funds",
        "rejmessage": "",
        "status": 0,
        "_id": {
          "$oid": "6597d0f40a49813b80210a26"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240521"
  },
  {
    "_id": {
      "$oid": "6597d1724cf7848fd46eef5d"
    },
    "title": "Short Allocation reporting",
    "description": "All exchanges\n",
    "start_date": "20240105",
    "expiry_date": "20250131",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "17:00:00",
    "external_time": "18:00:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a364b510d6c383eb768b"
        },
        "files": [],
        "maker": {
          "$oid": "65a0fd1381a0ee89930bb484"
        },
        "checker": {
          "$oid": "659e5784fe0688f294056ecd"
        },
        "submission": {
          "$oid": "65a0fd1381a0ee89930bb484"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "Trading day + 1",
        "rejmessage": "",
        "status": 0,
        "_id": {
          "$oid": "6597d1724cf7848fd46eef5e"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240120"
  },
  {
    "_id": {
      "$oid": "6597d5300a49813b80210a83"
    },
    "title": "Client Level Cash & Cash Equivalent Balances",
    "description": "On or before the next four trading days to Exchanges\n",
    "start_date": "20240105",
    "expiry_date": "20250131",
    "type": "weekly",
    "input_in_deadline": "1",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "03",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a310b510d6c383eb7673"
        },
        "files": [],
        "maker": {
          "$oid": "65a102c481a0ee89930bb514"
        },
        "checker": {
          "$oid": "65a1026f81a0ee89930bb50d"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "All exchanges",
        "status": 0,
        "_id": {
          "$oid": "6597d5300a49813b80210a84"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240416"
  },
  {
    "_id": {
      "$oid": "6597e2694cf7848fd46eefa3"
    },
    "title": "Reporting of clients mapped to Authorised Persons (AP)",
    "description": "To be Uploaded on a weekly",
    "start_date": "20240108",
    "expiry_date": "20250131",
    "type": "weekly",
    "input_in_deadline": "1",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "02",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a347b510d6c383eb767f"
        },
        "files": [],
        "maker": {
          "$oid": "659e525afe0688f294056ec6"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e525afe0688f294056ec6"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "\"To be Uploaded on a weekly basis, on or before the next 2 trading days of subsequent week to all Exchanges \"",
        "status": 0,
        "_id": {
          "$oid": "6597e2694cf7848fd46eefa4"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240517"
  },
  {
    "_id": {
      "$oid": "6597e3ca0a49813b80210af9"
    },
    "title": "FIU-IND STR filed - BSE (SUSPECIOUS TRANSACTION )",
    "description": "Monthly reporting\n",
    "start_date": "20240201",
    "expiry_date": "20250228",
    "type": "monthly",
    "input_in_deadline": "3",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "06",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "only in BSE",
        "status": 0,
        "_id": {
          "$oid": "6597e3ca0a49813b80210afa"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240502"
  },
  {
    "_id": {
      "$oid": "6597e4860a49813b80210b08"
    },
    "title": "Upload of complaints received during the month",
    "description": "NIL if no compliant received",
    "start_date": "20240201",
    "expiry_date": "20250228",
    "type": "monthly",
    "input_in_deadline": "02",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "06",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "all exchanges",
        "status": 0,
        "_id": {
          "$oid": "6597e4860a49813b80210b09"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240502"
  },
  {
    "_id": {
      "$oid": "6597e5ee0a49813b80210b19"
    },
    "title": "Publishing of Complaints received / redressel on website",
    "description": "Investor Charter Compliance",
    "start_date": "20240201",
    "expiry_date": "20250228",
    "type": "monthly",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "15",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "Mail to Velocity to upload the complaint received status with excel file ( all details)",
        "status": 0,
        "_id": {
          "$oid": "6597e5ee0a49813b80210b1a"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240502"
  },
  {
    "_id": {
      "$oid": "65a7af9a2eedc4df8ecf9e79"
    },
    "title": "Pledge reconciliation",
    "description": "daily task",
    "start_date": "20240118",
    "expiry_date": "20250131",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a347b510d6c383eb767f"
        },
        "files": [
          {
            "filename": "20240530071118-Pledge_Holding_Reco_29-05-2024.xlsx",
            "userId": {
              "$oid": "659e5187fe0688f294056ebf"
            }
          }
        ],
        "maker": {
          "$oid": "659e5187fe0688f294056ebf"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e5187fe0688f294056ebf"
        },
        "checker_status": 1,
        "submission_status": 0,
        "message": "Daily task",
        "status": 1,
        "_id": {
          "$oid": "65a7af9a2eedc4df8ecf9e7a"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240529"
  },
  {
    "_id": {
      "$oid": "65a905e0ce243d863296dfcc"
    },
    "title": "Reporting of Artificial Intelligence and Machine Learning applications used by the members",
    "description": "Within 15 days from the end of quarter\n",
    "start_date": "20240118",
    "expiry_date": "20400430",
    "type": "quarterly",
    "input_in_deadline": "5",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "15",
    "dd2": "15",
    "dd3": "15",
    "dd4": "15",
    "mm1": "01",
    "mm2": "04",
    "mm3": "07",
    "mm4": "09",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "Within 15 days from the end of quarter",
        "status": 0,
        "_id": {
          "$oid": "65a905e0ce243d863296dfcd"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240403"
  },
  {
    "_id": {
      "$oid": "65a90772ce243d863296e07c"
    },
    "title": "Cyber Security & Cyber Resilience framework for Stock Brokers / Depository Participants",
    "description": "Within 15 days from the end of quarter\n",
    "start_date": "20240118",
    "expiry_date": "20310131",
    "type": "quarterly",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "15",
    "dd2": "15",
    "dd3": "15",
    "dd4": "15",
    "mm1": "01",
    "mm2": "04",
    "mm3": "07",
    "mm4": "10",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "Within 15 days from the end of quarter",
        "status": 0,
        "_id": {
          "$oid": "65a90772ce243d863296e07d"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240402"
  },
  {
    "_id": {
      "$oid": "65a90942ce243d863296e106"
    },
    "title": "Submission of Summary Quarterly Settlement of clients funds to exchange",
    "description": "Within 10 days from the end of quarter\n",
    "start_date": "20240118",
    "expiry_date": "20290131",
    "type": "quarterly",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "10",
    "dd2": "10",
    "dd3": "10",
    "dd4": "10",
    "mm1": "01",
    "mm2": "04",
    "mm3": "07",
    "mm4": "10",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "Within 10 days from the end of quarter",
        "status": 0,
        "_id": {
          "$oid": "65a90942ce243d863296e107"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240408"
  },
  {
    "_id": {
      "$oid": "65a90a01ce243d863296e153"
    },
    "title": "Submission of UCC wise Quarterly Settlement of clients funds to exchange",
    "description": "Within 20 days from the end of quarter\n",
    "start_date": "20240118",
    "expiry_date": "20290131",
    "type": "quarterly",
    "input_in_deadline": "15",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "20",
    "dd2": "20",
    "dd3": "20",
    "dd4": "20",
    "mm1": "01",
    "mm2": "04",
    "mm3": "07",
    "mm4": "10",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "Within 20 days from the end of quarter",
        "status": 0,
        "_id": {
          "$oid": "65a90a01ce243d863296e154"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240409"
  },
  {
    "_id": {
      "$oid": "65c1b58fa5ae15c3cb0a1487"
    },
    "title": "Monitoring of client funds under Enhanced Supervision",
    "description": "Daily reporting requirement of data towards Monitoring of Clients’ Funds lying with the Stock Broker under Enhanced Supervision.\n(weekly reporting requirement of data towards Monitoring of Clients’ Funds lying with the Stock Broker under Enhanced Supervision as prescribed under Exchange Circular)",
    "start_date": "20240206",
    "expiry_date": "20270227",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a31ab510d6c383eb7679"
        },
        "files": [],
        "maker": {
          "$oid": "65a102c481a0ee89930bb514"
        },
        "checker": {
          "$oid": "65a102c481a0ee89930bb514"
        },
        "submission": {
          "$oid": "65a102c481a0ee89930bb514"
        },
        "checker_status": 1,
        "submission_status": 1,
        "message": "daily maintaining the  file for Enhanced Supervision",
        "status": 1,
        "_id": {
          "$oid": "65c1b58fa5ae15c3cb0a1488"
        }
      }
    ],
    "fileId": [],
    "completed_status": 1,
    "completed_date": "20240530"
  },
  {
    "_id": {
      "$oid": "65c468ba408d0a8ffcae3dbb"
    },
    "title": "Investor Grievances (Report) CDSL",
    "description": "Depositary - Investor Grievances (Report) CDSL ",
    "start_date": "20240208",
    "expiry_date": "20280210",
    "type": "monthly",
    "input_in_deadline": "4",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "10",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a347b510d6c383eb767f"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "Investor Grievances (Report) CDSL  - 10.02.2024",
        "status": 0,
        "_id": {
          "$oid": "65c468ba408d0a8ffcae3dbc"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240503"
  },
  {
    "_id": {
      "$oid": "65fd521b3115bf8408747f72"
    },
    "title": "VAR file updating",
    "description": "VAR file updating  (pledge and MTF module) - daily activity",
    "start_date": "20240326",
    "expiry_date": "20240329",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "11:00:00",
    "external_time": "12:09:23",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [
          {
            "filename": "20240530051338-29052024.csv",
            "userId": {
              "$oid": "659e6d94fdc67c1754994b6a"
            }
          }
        ],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 1,
        "submission_status": 1,
        "message": "daily VAR file need to upload by 11am",
        "status": 1,
        "_id": {
          "$oid": "65fd521b3115bf8408747f73"
        }
      }
    ],
    "fileId": [],
    "completed_status": 1,
    "completed_date": "20240530"
  },
  {
    "_id": {
      "$oid": "65fd58103115bf840874800d"
    },
    "title": "CDAS Report downloading  / uploading in Backoffice",
    "description": "CDAS Report downloading  / uploading in Backoffice - daily activity",
    "start_date": "20240326",
    "expiry_date": "20240329",
    "type": "daily",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a347b510d6c383eb767f"
        },
        "files": [],
        "maker": {
          "$oid": "659e498cfe0688f294056ea0"
        },
        "checker": {
          "$oid": "659e5187fe0688f294056ebf"
        },
        "submission": {
          "$oid": "659e498cfe0688f294056ea0"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "CDAS Report downloading  / uploading in Backoffice",
        "status": 0,
        "_id": {
          "$oid": "65fd58103115bf840874800e"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240527"
  },
  {
    "_id": {
      "$oid": "664c2f9cd2edc9470004c74b"
    },
    "title": "Developer Testing task",
    "description": "Ignore this task",
    "start_date": "20240521",
    "expiry_date": "20240531",
    "type": "oneTime",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "",
    "dd2": "",
    "dd3": "",
    "dd4": "",
    "mm1": "",
    "mm2": "",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "maker": {
          "$oid": "656989c9383322aac5094097"
        },
        "checker": {
          "$oid": "656989c9383322aac5094097"
        },
        "submission": {
          "$oid": "656989c9383322aac5094097"
        },
        "checker_status": 1,
        "submission_status": 1,
        "message": "Developer Testing task",
        "status": 1,
        "_id": {
          "$oid": "664c2f9cd2edc9470004c74c"
        },
        "files": [
          {
            "filename": "20240521091707-17cc7636-ce7e-4974-bf34-0af52f6ced56.png",
            "userId": {
              "$oid": "656989c9383322aac5094097"
            }
          }
        ]
      }
    ],
    "fileId": [
      {
        "filePath": "D:/Ecompliancetasks/20240521052236-17cc7636-ce7e-4974-bf34-0af52f6ced56.png",
        "filename": "20240521052236-17cc7636-ce7e-4974-bf34-0af52f6ced56.png"
      }
    ],
    "completed_status": 1,
    "completed_date": "20240521"
  },
  {
    "_id": {
      "$oid": "664ed9b5d2edc9470004df45"
    },
    "title": "Risk Based Supervision Data",
    "description": "Submission of Risk Based Supervision Data for the period April 01, 2023 – March 31, 2024 (FY 2023-24)",
    "start_date": "20240523",
    "expiry_date": "20400531",
    "type": "halfyearly",
    "input_in_deadline": "2",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "25",
    "dd2": "25",
    "dd3": "",
    "dd4": "",
    "mm1": "05",
    "mm2": "10",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "files": [],
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "BSE/ NSE /MCX",
        "status": 0,
        "_id": {
          "$oid": "664ed9b5d2edc9470004df46"
        }
      }
    ],
    "fileId": [],
    "completed_status": 0,
    "completed_date": "20240523"
  },
  {
    "_id": {
      "$oid": "664eda14d2edc9470004df59"
    },
    "title": "Internal Audit Report for the half year",
    "description": "Submission of Internal Audit Report for the half year ended March 31, 2024",
    "start_date": "20240523",
    "expiry_date": "20350530",
    "type": "halfyearly",
    "input_in_deadline": "0",
    "internal_time": "15:00",
    "external_time": "16:00",
    "w_day": "",
    "dd1": "28",
    "dd2": "28",
    "dd3": "",
    "dd4": "",
    "mm1": "05",
    "mm2": "10",
    "mm3": "",
    "mm4": "",
    "department": [
      {
        "department": {
          "$oid": "6597a352b510d6c383eb7685"
        },
        "maker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "submission": {
          "$oid": "659e6d94fdc67c1754994b6a"
        },
        "checker_status": 0,
        "submission_status": 0,
        "message": "BSE/ NSE/MCX",
        "status": 0,
        "_id": {
          "$oid": "664eda14d2edc9470004df5a"
        },
        "files": []
      }
    ],
    "fileId": [],
    "completed_status": 0
  }];

exports.old_to_new = async (req, res) => {
    let EmailData = req.body;
    try {
          
  
  // Converting the old data array to new data array
  const newData = convertData(oldData);
//   const newDataArray = oldDataArray.map(convertOldDataToNew);
  
//   console.log(JSON.stringify(newDataArray, null, 2));
  res.status(200).send(newData);
    } catch (error) {
        console.log(error);
        res.send(`error whlile sending mail..`, error)
    }
};
// Conversion function
function convertData(oldData) {
    return oldData.map(item => {
      const {
        _id,
        title,
        description,
        start_date,
        expiry_date,
        type,
        internal_time,
        department,
        completed_date
      } = item;
  
      // Convert department data
      const newDepartment = department.map(dep => ({
        departmentId: dep.department,
        message: dep.message,
        maker: dep.maker || null,
        makerStatus: dep.maker_status || 0,
        checker: dep.checker || null,
        checkerStatus: dep.checker_status || 0,
        submitter: dep.submission || null,
        submissionStatus: dep.submission_status || 0,
        makerStatusDate: dep.maker_status_date ? new Date(dep.maker_status_date) : null,
        checkerStatusDate: dep.checker_status_date ? new Date(dep.checker_status_date) : null,
        submissionStatusDate: dep.submission_status_date ? new Date(dep.submission_status_date) : null,
        _id: dep._id,
        files: dep.files.map(file => ({
          fileName: file.filename,
          fileUrl: null, // Assuming file URL is not available in old data
          user: file.userId,
          _id: file._id
        }))
      }));
  
      // Convert date strings to ISO format
      const formatDate = dateString => {
        if (dateString && dateString.length === 8) {
          const year = dateString.substring(0, 4);
          const month = dateString.substring(4, 6);
          const day = dateString.substring(6, 8);
          return `${year}-${month}-${day}T00:00:00.000Z`;
        }
        return null; // Return null for invalid date strings
      };
  
      const startDate = formatDate(start_date);
      const endDate = formatDate(expiry_date);
      const completedDate = completed_date ? formatDate(completed_date) : null;
  
      return {
        _id,
        title,
        description: description.trim(),
        startDate: startDate ? { "$date": startDate } : null,
        endDate: endDate ? { "$date": endDate } : null,
        taskType: type,
        weekDay: item.w_day || null,
        dayTime: internal_time,
        deadLine: parseInt(item.input_in_deadline, 10),
        files: [], // Assuming no files at root level
        dateArray: [],
        monthArray: [],
        department: newDepartment,
        targetDate: null,
        completedDate: completedDate
      };
    });
  }
  
  
  
  // Example old data array

  