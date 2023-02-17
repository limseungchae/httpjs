const oracledb = require('oracledb');
const dbconfig = require('../dbconfig');

const Oracle = {
    initConn: () => {
        oracledb.initOracleClient(
            {libDir: 'C:/Java/instantclient_19_17'});
    },

    makeConn: async () => {
        try {
            return await oracledb.getConnection(dbconfig);
        } catch (e) { console.log(e); }
    },


    colseConn: async (conn) => {
        if(conn) {
            try {conn.close(); }
            catch (e) {console.log(e); }
            }
        }
    };

module.exports = Oracle;