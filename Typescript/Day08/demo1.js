//Json Object 
// Json Object Store a data is in Key & value Format
var jsonObj = {
    fname: "Sumit",
    "lname": "Raokhande",
    id: 9
};
//we can retrive a data in ways 
// 1 dot operator
// 2 square operator
// 1 dot operator
// console.log(`
//   First Name  :: ${jsonObj.fname}
//   Last Name   :: ${jsonObj.lname}
//   ID          :: ${jsonObj.id}
// `)
// 2 square operator
// console.log(`---------
//     First Name  :: ${jsonObj["fname"]}
//     Last Name   :: ${jsonObj['lname']}
//     ID          :: ${jsonObj["id"]}
// `)
// Array Of Object
var arrobj = [
    {
        fname: "Sumit",
        lname: "Raokhande",
        id: 9,
        month: ['Jan', 'Feb', 'March'],
        country: {
            cid: 1,
            cname: "India"
        },
        result: [
            {
                sub: "M1",
                marks: 40
            },
            {
                sub: "M2",
                marks: 45
            },
            {
                sub: "M3",
                marks: 55
            }
        ]
    },
    {
        fname: "Kiran",
        lname: "Raokhande",
        id: 6,
        month: ['May', 'Feb', 'June'],
        country: {
            cid: 2,
            cname: "US"
        },
        result: [
            {
                sub: "M1",
                marks: 55
            },
            {
                sub: "M2",
                marks: 65
            },
            {
                sub: "M3",
                marks: 75
            }
        ]
    },
    {
        fname: "Spruha",
        lname: "Raokhande",
        id: 3,
        month: ['Dec', 'Aug', 'April'],
        country: {
            cid: 3,
            cname: "Japan"
        },
        result: [
            {
                sub: "M1",
                marks: 60
            },
            {
                sub: "M2",
                marks: 75
            },
            {
                sub: "M3",
                marks: 85
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n  ------------------------------------\n  First Name  :: ".concat(arrobj[i].fname, "\n  Last Name   :: ").concat(arrobj[i].lname, "\n  ID          :: ").concat(arrobj[i].id, "\n  Month       :: ").concat(arrobj[i].month.join(" "), "\n  Country Name:: ").concat(arrobj[i].country.cname, "\n  --Result---------\n"));
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n        Subject :: ".concat(arrobj[i].result[j].sub, "\n        Marks   :: ").concat(arrobj[i].result[j].marks, "    \n    "));
    }
    // console.log("Country is "+arrobj[i].country.cname)
}
// console.log("Country is "+arrobj[0].country.cname)
