export default `span_idx,message_idx,timestamp,duration,operation,loc,tag,message,age
0,0,2018-10-06 13:34:15.186211+00:00,17s246ms953μs21ns,session recording,,,=== SPAN START: session recording ===,0s
0,1,2018-10-06 13:34:15.186479+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:15] executing Sync,268μs
0,2,2018-10-06 13:34:15.186907+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:16] executing ExecStmt: SHOW TRANSACTION STATUS,696μs
0,3,2018-10-06 13:34:15.186916+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW TRANSACTION STATUS in state: NoTxn,705μs
0,4,2018-10-06 13:34:15.186942+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:17] executing Sync,731μs
0,5,2018-10-06 13:34:15.187037+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:18] executing ExecStmt: SHOW database,826μs
0,6,2018-10-06 13:34:15.187053+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW database in state: NoTxn,842μs
1,0,2018-10-06 13:34:15.187074+00:00,529μs945ns,sql txn,,,=== SPAN START: sql txn ===,863μs
1,1,2018-10-06 13:34:15.187112+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",[Open pos:18] executing ExecStmt: SHOW database,901μs
1,2,2018-10-06 13:34:15.187115+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW database in state: Open,904μs
1,3,2018-10-06 13:34:15.187145+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",planning starts: SHOW,934μs
1,4,2018-10-06 13:34:15.187147+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",generating optimizer plan,936μs
1,5,2018-10-06 13:34:15.187163+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",optimizer plan failed: unsupported statement: *tree.ShowVar,952μs
1,6,2018-10-06 13:34:15.187165+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",optimizer falls back on heuristic planner,954μs
1,7,2018-10-06 13:34:15.187166+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",query is correlated: false,955μs
1,8,2018-10-06 13:34:15.187175+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",heuristic planner starts,964μs
1,9,2018-10-06 13:34:15.187187+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]","delegated query: ""SELECT value AS database FROM crdb_internal.session_variables WHERE variable = 'database'""",976μs
1,10,2018-10-06 13:34:15.187315+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",heuristic planner optimizes plan,1ms104μs
1,11,2018-10-06 13:34:15.187381+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",heuristic planner optimizes subqueries,1ms170μs
1,12,2018-10-06 13:34:15.187382+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",planning ends,1ms171μs
1,13,2018-10-06 13:34:15.187386+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",checking distributability,1ms175μs
1,14,2018-10-06 13:34:15.187391+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",query not supported for distSQL: unsupported node *sql.valuesNode,1ms180μs
1,15,2018-10-06 13:34:15.187392+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",distributable plan: false,1ms181μs
1,16,2018-10-06 13:34:15.187394+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",execution starts: distributed,1ms183μs
2,0,2018-10-06 13:34:15.187396+00:00,152μs378ns,consuming rows,,,=== SPAN START: consuming rows ===,1ms185μs
1,17,2018-10-06 13:34:15.187416+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",creating DistSQL plan with isLocal=true,1ms205μs
1,18,2018-10-06 13:34:15.18747+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",running DistSQL plan,1ms259μs
3,0,2018-10-06 13:34:15.187478+00:00,72μs188ns,flow,,,=== SPAN START: flow ===,1ms267μs
3,1,2018-10-06 13:34:15.187504+00:00,72μs188ns,flow,,"[n1,client=127.0.0.1:65404,user=root]","starting (1 processors, 0 startables)",1ms293μs
1,19,2018-10-06 13:34:15.187555+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",execution ends,1ms344μs
1,20,2018-10-06 13:34:15.18756+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",rows affected: 1,1ms349μs
1,21,2018-10-06 13:34:15.187591+00:00,529μs945ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",AutoCommit. err: <nil>,1ms380μs
0,7,2018-10-06 13:34:15.187612+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:19] executing Sync,1ms401μs
0,8,2018-10-06 13:34:15.187782+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:20] executing ExecStmt: SHOW TRANSACTION STATUS,1ms571μs
0,9,2018-10-06 13:34:15.187787+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW TRANSACTION STATUS in state: NoTxn,1ms576μs
0,10,2018-10-06 13:34:15.187818+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:21] executing Sync,1ms607μs
0,11,2018-10-06 13:34:19.888703+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:22] executing ExecStmt: SHOW SYNTAX 'select * from tpcc.order_line limit 10;',4s702ms492μs
0,12,2018-10-06 13:34:19.888712+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW SYNTAX 'select * from tpcc.order_line limit 10;' in state: NoTxn,4s702ms501μs
0,13,2018-10-06 13:34:19.890557+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:23] executing Sync,4s704ms346μs
0,14,2018-10-06 13:34:19.890694+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:24] executing ExecStmt: SELECT * FROM tpcc.order_line LIMIT 10,4s704ms483μs
0,15,2018-10-06 13:34:19.890698+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SELECT * FROM tpcc.order_line LIMIT 10 in state: NoTxn,4s704ms487μs
4,0,2018-10-06 13:34:19.890708+00:00,10ms202μs943ns,sql txn,,,=== SPAN START: sql txn ===,4s704ms497μs
4,1,2018-10-06 13:34:19.890759+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",[Open pos:24] executing ExecStmt: SELECT * FROM tpcc.order_line LIMIT 10,4s704ms548μs
4,2,2018-10-06 13:34:19.890762+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",executing: SELECT * FROM tpcc.order_line LIMIT 10 in state: Open,4s704ms551μs
4,3,2018-10-06 13:34:19.890777+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",planning starts: SELECT,4s704ms566μs
4,4,2018-10-06 13:34:19.890778+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",generating optimizer plan,4s704ms567μs
4,5,2018-10-06 13:34:19.890802+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",added table 'tpcc.public.order_line' to table collection,4s704ms591μs
4,6,2018-10-06 13:34:19.891824+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",optimizer plan succeeded,4s705ms613μs
4,7,2018-10-06 13:34:19.891829+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",planning ends,4s705ms618μs
4,8,2018-10-06 13:34:19.891839+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",checking distributability,4s705ms628μs
4,9,2018-10-06 13:34:19.891842+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",distributable plan: true,4s705ms631μs
4,10,2018-10-06 13:34:19.891845+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",execution starts: distributed,4s705ms634μs
5,0,2018-10-06 13:34:19.891846+00:00,8ms963μs390ns,consuming rows,,,=== SPAN START: consuming rows ===,4s705ms635μs
4,11,2018-10-06 13:34:19.891857+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",creating DistSQL plan with isLocal=false,4s705ms646μs
4,12,2018-10-06 13:34:19.891879+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",querying next range at /Table/55/1,4s705ms668μs
4,13,2018-10-06 13:34:19.89192+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",running DistSQL plan,4s705ms709μs
6,0,2018-10-06 13:34:19.891952+00:00,1ms442μs366ns,/cockroach.sql.distsqlrun.DistSQL/SetupFlow,,,=== SPAN START: /cockroach.sql.distsqlrun.DistSQL/SetupFlow ===,4s705ms741μs
7,0,2018-10-06 13:34:19.893423+00:00,7ms403μs484ns,flow,,,=== SPAN START: flow ===,4s707ms212μs
7,1,2018-10-06 13:34:19.89348+00:00,7ms403μs484ns,flow,,"[n1,client=127.0.0.1:65404,user=root]","starting (1 processors, 0 startables)",4s707ms269μs
19,0,2018-10-06 13:34:19.893489+00:00,1ns,noop,,,"=== SPAN START: noop ===
cockroach.processorid: 1",4s707ms278μs
4,14,2018-10-06 13:34:19.90084+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",execution ends,4s714ms629μs
4,15,2018-10-06 13:34:19.900843+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",rows affected: 10,4s714ms632μs
4,16,2018-10-06 13:34:19.900903+00:00,10ms202μs943ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",AutoCommit. err: <nil>,4s714ms692μs
0,16,2018-10-06 13:34:19.900915+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",releasing 1 tables,4s714ms704μs
0,17,2018-10-06 13:34:19.900929+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:25] executing Sync,4s714ms718μs
0,18,2018-10-06 13:34:19.909598+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:26] executing ExecStmt: SHOW TRANSACTION STATUS,4s723ms387μs
0,19,2018-10-06 13:34:19.909604+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW TRANSACTION STATUS in state: NoTxn,4s723ms393μs
0,20,2018-10-06 13:34:19.909631+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:27] executing Sync,4s723ms420μs
0,21,2018-10-06 13:34:19.909697+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:28] executing ExecStmt: SHOW database,4s723ms486μs
0,22,2018-10-06 13:34:19.909709+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW database in state: NoTxn,4s723ms498μs
8,0,2018-10-06 13:34:19.909722+00:00,329μs351ns,sql txn,,,=== SPAN START: sql txn ===,4s723ms511μs
8,1,2018-10-06 13:34:19.909749+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",[Open pos:28] executing ExecStmt: SHOW database,4s723ms538μs
8,2,2018-10-06 13:34:19.909752+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW database in state: Open,4s723ms541μs
8,3,2018-10-06 13:34:19.909766+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",planning starts: SHOW,4s723ms555μs
8,4,2018-10-06 13:34:19.909767+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",generating optimizer plan,4s723ms556μs
8,5,2018-10-06 13:34:19.909784+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",optimizer plan failed: unsupported statement: *tree.ShowVar,4s723ms573μs
8,6,2018-10-06 13:34:19.909786+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",optimizer falls back on heuristic planner,4s723ms575μs
8,7,2018-10-06 13:34:19.909788+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",query is correlated: false,4s723ms577μs
8,8,2018-10-06 13:34:19.909789+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",heuristic planner starts,4s723ms578μs
8,9,2018-10-06 13:34:19.909802+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]","delegated query: ""SELECT value AS database FROM crdb_internal.session_variables WHERE variable = 'database'""",4s723ms591μs
8,10,2018-10-06 13:34:19.90989+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",heuristic planner optimizes plan,4s723ms679μs
8,11,2018-10-06 13:34:19.909941+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",heuristic planner optimizes subqueries,4s723ms730μs
8,12,2018-10-06 13:34:19.909942+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",planning ends,4s723ms731μs
8,13,2018-10-06 13:34:19.909945+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",checking distributability,4s723ms734μs
8,14,2018-10-06 13:34:19.90995+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",query not supported for distSQL: unsupported node *sql.valuesNode,4s723ms739μs
8,15,2018-10-06 13:34:19.909951+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",distributable plan: false,4s723ms740μs
8,16,2018-10-06 13:34:19.909953+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",execution starts: distributed,4s723ms742μs
9,0,2018-10-06 13:34:19.909954+00:00,72μs483ns,consuming rows,,,=== SPAN START: consuming rows ===,4s723ms743μs
8,17,2018-10-06 13:34:19.90996+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",creating DistSQL plan with isLocal=true,4s723ms749μs
8,18,2018-10-06 13:34:19.909977+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",running DistSQL plan,4s723ms766μs
10,0,2018-10-06 13:34:19.909982+00:00,45μs818ns,flow,,,=== SPAN START: flow ===,4s723ms771μs
10,1,2018-10-06 13:34:19.909997+00:00,45μs818ns,flow,,"[n1,client=127.0.0.1:65404,user=root]","starting (1 processors, 0 startables)",4s723ms786μs
8,19,2018-10-06 13:34:19.910032+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",execution ends,4s723ms821μs
8,20,2018-10-06 13:34:19.910034+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",rows affected: 1,4s723ms823μs
8,21,2018-10-06 13:34:19.910047+00:00,329μs351ns,sql txn,,"[n1,client=127.0.0.1:65404,user=root]",AutoCommit. err: <nil>,4s723ms836μs
0,23,2018-10-06 13:34:19.910056+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:29] executing Sync,4s723ms845μs
0,24,2018-10-06 13:34:19.910124+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:30] executing ExecStmt: SHOW TRANSACTION STATUS,4s723ms913μs
0,25,2018-10-06 13:34:19.910127+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW TRANSACTION STATUS in state: NoTxn,4s723ms916μs
0,26,2018-10-06 13:34:19.910139+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:31] executing Sync,4s723ms928μs
0,27,2018-10-06 13:34:32.432942+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:32] executing ExecStmt: SHOW SYNTAX 'set tracing = off;',17s246ms731μs
0,28,2018-10-06 13:34:32.432957+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SHOW SYNTAX 'set tracing = off;' in state: NoTxn,17s246ms746μs
0,29,2018-10-06 13:34:32.433033+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:33] executing Sync,17s246ms822μs
0,30,2018-10-06 13:34:32.433208+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",[NoTxn pos:34] executing ExecStmt: SET TRACING = off,17s246ms997μs
0,31,2018-10-06 13:34:32.433215+00:00,17s246ms953μs21ns,session recording,,"[n1,client=127.0.0.1:65404,user=root]",executing: SET TRACING = off in state: NoTxn,17s247ms4μs
11,0,2018-10-06 13:34:19.893515+00:00,1ns,table reader,,,"=== SPAN START: table reader ===
cockroach.processorid: 0
cockroach.stat.tablereader.input.rows: 10
cockroach.stat.tablereader.stalltime: 46µs",4s707ms304μs
11,1,2018-10-06 13:34:19.893578+00:00,1ns,table reader,,[n4],Scan /Table/55/{1-2},4s707ms367μs
12,0,2018-10-06 13:34:19.893582+00:00,5ms58μs895ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,4s707ms371μs
13,0,2018-10-06 13:34:19.89362+00:00,5ms16μs120ns,dist sender send,,,=== SPAN START: dist sender send ===,4s707ms409μs
13,1,2018-10-06 13:34:19.893634+00:00,5ms16μs120ns,dist sender send,,"[n4,txn=9af56885]",querying next range at /Table/55/1,4s707ms423μs
13,2,2018-10-06 13:34:19.893664+00:00,5ms16μs120ns,dist sender send,,"[n4,txn=9af56885]","r94: sending batch 1 Scan to (n4,s4):2",4s707ms453μs
13,3,2018-10-06 13:34:19.893666+00:00,5ms16μs120ns,dist sender send,,"[n4,txn=9af56885]",sending request to local client,4s707ms455μs
14,0,2018-10-06 13:34:19.893671+00:00,1ms761μs880ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,4s707ms460μs
14,1,2018-10-06 13:34:19.893677+00:00,1ms761μs880ns,/cockroach.roachpb.Internal/Batch,,[n4],1 Scan,4s707ms466μs
14,2,2018-10-06 13:34:19.893711+00:00,1ms761μs880ns,/cockroach.roachpb.Internal/Batch,,"[n4,s4]",executing 1 requests,4s707ms500μs
14,3,2018-10-06 13:34:19.893725+00:00,1ms761μs880ns,/cockroach.roachpb.Internal/Batch,,"[n4,s4,r94/2:/Table/55{-/1/0/1/-…}]",read-only path,4s707ms514μs
14,4,2018-10-06 13:34:19.893734+00:00,1ms761μs880ns,/cockroach.roachpb.Internal/Batch,,"[n4,s4,r94/2:/Table/55{-/1/0/1/-…}]",command queue,4s707ms523μs
14,5,2018-10-06 13:34:19.89375+00:00,1ms761μs880ns,/cockroach.roachpb.Internal/Batch,,"[n4,s4,r94/2:/Table/55{-/1/0/1/-…}]",waiting for read lock,4s707ms539μs
14,6,2018-10-06 13:34:19.894811+00:00,1ms761μs880ns,/cockroach.roachpb.Internal/Batch,,"[n4,s4,r94/2:/Table/55{-/1/0/1/-…}]",read completed,4s708ms600μs
13,4,2018-10-06 13:34:19.895452+00:00,5ms16μs120ns,dist sender send,,"[n4,txn=9af56885]",querying next range at /Table/55/1/0/1/-3001/1/0,4s709ms241μs
13,5,2018-10-06 13:34:19.895472+00:00,5ms16μs120ns,dist sender send,,"[n4,txn=9af56885]","r106: sending batch 1 Scan to (n1,s1):1",4s709ms261μs
13,6,2018-10-06 13:34:19.895475+00:00,5ms16μs120ns,dist sender send,,"[n4,txn=9af56885]",sending request to localhost:26257,4s709ms264μs
15,0,2018-10-06 13:34:19.895485+00:00,3ms136μs248ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,4s709ms274μs
16,0,2018-10-06 13:34:19.895768+00:00,NULL,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,4s709ms557μs
16,1,2018-10-06 13:34:19.895779+00:00,NULL,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,4s709ms568μs
16,2,2018-10-06 13:34:19.895787+00:00,NULL,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,4s709ms576μs
16,3,2018-10-06 13:34:19.8958+00:00,NULL,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",read-only path,4s709ms589μs
16,4,2018-10-06 13:34:19.895835+00:00,NULL,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",read has no clock uncertainty,4s709ms624μs
16,5,2018-10-06 13:34:19.895843+00:00,NULL,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",command queue,4s709ms632μs
16,6,2018-10-06 13:34:19.895882+00:00,NULL,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",waiting for read lock,4s709ms671μs
16,7,2018-10-06 13:34:19.896024+00:00,NULL,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",read completed,4s709ms813μs
17,0,2018-10-06 13:34:19.893244+00:00,6ms144μs694ns,outbox,,,"=== SPAN START: outbox ===
cockroach.stat.outbox.bytes_sent: ิ
cockroach.streamid: 0",4s707ms33μs
18,0,2018-10-06 13:34:19.893332+00:00,NULL,[async] drain,,,=== SPAN START: [async] drain ===,4s707ms121μs
18,1,2018-10-06 13:34:19.893638+00:00,NULL,[async] drain,,[n4],Consumer sent handshake. Consuming flow scheduled: true,4s707ms427μs`;
