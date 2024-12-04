import postgres from "postgres";

const sql = postgres('postgres://root:root@192.168.1.27:5432/Estela');

export default sql;

