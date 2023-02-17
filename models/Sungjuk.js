const oracledb = require("../models/Oracle");

class Sungjuk {
    // 생성자 정의 - 변수 초기화
    // 즉, 매개변수로 전달된 값을 크랠스 멤버변수에 대입함
    constructor(name,kor,eng,mat,tot,avg,grd) {
        tiis.name = name;
        tiis.kor = kor;
        tiis.eng = eng;
        tiis.mat = mat;
        tiis.tot = tot;
        tiis.avg = avg;
        tiis.grd = grd;
    }

    // 성적 저장
    async insert() {
        let conn = null;
        let sql = 'insert into sungjuk ' +
            ' (sjno, name, kor, eng, mat, tot, avg, grd) ' +
            ' values (sjno.nextval, :1,:2,:3,:4,:5,:6,:7) ';
        let params = [this.name, this.kor, this.eng, this.mat, this.tot, this.avg, this.grd];

        try{
            conn = await oracledb.makeCOnn();
            let result = await conn.execute(sql, params);
            await conn.commit();
            console.log(result);
        } catch (e) {
            console.log(e);
        } finally {
            await oracledb.closeConn(conn);
        }
    }

    // 성적 전체조회
    selct() {}

    // 성적 상세조회
    selctOne(sjno) {}

}

module.exports = Sungjuk;