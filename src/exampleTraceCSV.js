const exampleTraceCSV = `timestamp,age,message,tag,location,operation,span
2018-10-05 19:01:43.591922+00:00,0s,=== SPAN START: session recording ===,,,session recording,0
2018-10-05 19:01:43.591945+00:00,23us,[NoTxn pos:1] executing ExecStmt: SELECT * FROM tpcc.order_line LIMIT 5,"[n1,client=127.0.0.1:58832,user=root]",,session recording,0
2018-10-05 19:01:43.59195+00:00,28us,executing: SELECT * FROM tpcc.order_line LIMIT 5 in state: NoTxn,"[n1,client=127.0.0.1:58832,user=root]",,session recording,0
2018-10-05 19:01:43.591964+00:00,42us,=== SPAN START: sql txn ===,,,sql txn,1
2018-10-05 19:01:43.592024+00:00,102us,[Open pos:1] executing ExecStmt: SELECT * FROM tpcc.order_line LIMIT 5,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.59203+00:00,108us,executing: SELECT * FROM tpcc.order_line LIMIT 5 in state: Open,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592054+00:00,132us,planning starts: SELECT,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592056+00:00,134us,generating optimizer plan,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592078+00:00,156us,added table 'tpcc.public.order_line' to table collection,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592191+00:00,269us,optimizer plan succeeded,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592193+00:00,271us,planning ends,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592204+00:00,282us,checking distributability,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592207+00:00,285us,distributable plan: true,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592215+00:00,293us,execution starts: distributed,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592216+00:00,294us,=== SPAN START: consuming rows ===,,,consuming rows,2
2018-10-05 19:01:43.59223+00:00,308us,creating DistSQL plan with isLocal=false,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592284+00:00,362us,querying next range at /Table/55/1,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592327+00:00,405us,running DistSQL plan,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.592359+00:00,437us,=== SPAN START: /cockroach.sql.distsqlrun.DistSQL/SetupFlow ===,,,/cockroach.sql.distsqlrun.DistSQL/SetupFlow,3
2018-10-05 19:01:43.592859+00:00,937us,"=== SPAN START: outbox ===
cockroach.stat.outbox.bytes_sent: ഼
cockroach.streamid: 0",,,outbox,14
2018-10-05 19:01:43.592899+00:00,977us,"=== SPAN START: table reader ===
cockroach.processorid: 0
cockroach.stat.tablereader.input.rows: 5
cockroach.stat.tablereader.stalltime: 8µs",,,table reader,8
2018-10-05 19:01:43.592934+00:00,1ms12us,Scan /Table/55/{1-2},[n4],,table reader,8
2018-10-05 19:01:43.592938+00:00,1ms16us,=== SPAN START: txn coordinator send ===,,,txn coordinator send,9
2018-10-05 19:01:43.592947+00:00,1ms25us,=== SPAN START: [async] drain ===,,,[async] drain,15
2018-10-05 19:01:43.592969+00:00,1ms47us,=== SPAN START: dist sender send ===,,,dist sender send,10
2018-10-05 19:01:43.592988+00:00,1ms66us,querying next range at /Table/55/1,"[n4,txn=6514958d]",,dist sender send,10
2018-10-05 19:01:43.592992+00:00,1ms70us,=== SPAN START: flow ===,,,flow,4
2018-10-05 19:01:43.593022+00:00,1ms100us,"r94: sending batch 1 Scan to (n4,s4):2","[n4,txn=6514958d]",,dist sender send,10
2018-10-05 19:01:43.593024+00:00,1ms102us,sending request to local client,"[n4,txn=6514958d]",,dist sender send,10
2018-10-05 19:01:43.593028+00:00,1ms106us,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,,,/cockroach.roachpb.Internal/Batch,11
2018-10-05 19:01:43.593031+00:00,1ms109us,1 Scan,[n4],,/cockroach.roachpb.Internal/Batch,11
2018-10-05 19:01:43.59305+00:00,1ms128us,"starting (1 processors, 0 startables)","[n1,client=127.0.0.1:58832,user=root]",,flow,4
2018-10-05 19:01:43.593058+00:00,1ms136us,"=== SPAN START: noop ===
cockroach.processorid: 1",,,noop,16
2018-10-05 19:01:43.593071+00:00,1ms149us,executing 1 requests,"[n4,s4]",,/cockroach.roachpb.Internal/Batch,11
2018-10-05 19:01:43.593086+00:00,1ms164us,read-only path,"[n4,s4,r94/2:/Table/55{-/1/0/1/-…}]",,/cockroach.roachpb.Internal/Batch,11
2018-10-05 19:01:43.593098+00:00,1ms176us,command queue,"[n4,s4,r94/2:/Table/55{-/1/0/1/-…}]",,/cockroach.roachpb.Internal/Batch,11
2018-10-05 19:01:43.593117+00:00,1ms195us,waiting for read lock,"[n4,s4,r94/2:/Table/55{-/1/0/1/-…}]",,/cockroach.roachpb.Internal/Batch,11
2018-10-05 19:01:43.593179+00:00,1ms257us,Consumer sent handshake. Consuming flow scheduled: true,[n4],,[async] drain,15
2018-10-05 19:01:43.593185+00:00,1ms263us,read completed,"[n4,s4,r94/2:/Table/55{-/1/0/1/-…}]",,/cockroach.roachpb.Internal/Batch,11
2018-10-05 19:01:43.59322+00:00,1ms298us,querying next range at /Table/55/1/0/1/-3001/1/0,"[n4,txn=6514958d]",,dist sender send,10
2018-10-05 19:01:43.593234+00:00,1ms312us,"r106: sending batch 1 Scan to (n1,s1):1","[n4,txn=6514958d]",,dist sender send,10
2018-10-05 19:01:43.593237+00:00,1ms315us,sending request to localhost:26257,"[n4,txn=6514958d]",,dist sender send,10
2018-10-05 19:01:43.593247+00:00,1ms325us,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,,,/cockroach.roachpb.Internal/Batch,12
2018-10-05 19:01:43.593419+00:00,1ms497us,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,,,/cockroach.roachpb.Internal/Batch,13
2018-10-05 19:01:43.593426+00:00,1ms504us,1 Scan,[n1],,/cockroach.roachpb.Internal/Batch,13
2018-10-05 19:01:43.593431+00:00,1ms509us,executing 1 requests,"[n1,s1]",,/cockroach.roachpb.Internal/Batch,13
2018-10-05 19:01:43.593444+00:00,1ms522us,read-only path,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",,/cockroach.roachpb.Internal/Batch,13
2018-10-05 19:01:43.593472+00:00,1ms550us,read has no clock uncertainty,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",,/cockroach.roachpb.Internal/Batch,13
2018-10-05 19:01:43.593477+00:00,1ms555us,command queue,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",,/cockroach.roachpb.Internal/Batch,13
2018-10-05 19:01:43.593496+00:00,1ms574us,waiting for read lock,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",,/cockroach.roachpb.Internal/Batch,13
2018-10-05 19:01:43.593573+00:00,1ms651us,read completed,"[n1,s1,r106/1:/Table/55/{1/0/1/-…-2}]",,/cockroach.roachpb.Internal/Batch,13
2018-10-05 19:01:43.594267+00:00,2ms345us,execution ends,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.594269+00:00,2ms347us,rows affected: 5,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.594304+00:00,2ms382us,AutoCommit. err: <nil>,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,1
2018-10-05 19:01:43.59431+00:00,2ms388us,releasing 1 tables,"[n1,client=127.0.0.1:58832,user=root]",,session recording,0
2018-10-05 19:01:43.59432+00:00,2ms398us,[NoTxn pos:2] executing ExecStmt: SHOW TRACE FOR SESSION,"[n1,client=127.0.0.1:58832,user=root]",,session recording,0
2018-10-05 19:01:43.594324+00:00,2ms402us,executing: SHOW TRACE FOR SESSION in state: NoTxn,"[n1,client=127.0.0.1:58832,user=root]",,session recording,0
2018-10-05 19:01:43.594337+00:00,2ms415us,=== SPAN START: sql txn ===,,,sql txn,5
2018-10-05 19:01:43.59435+00:00,2ms428us,[Open pos:2] executing ExecStmt: SHOW TRACE FOR SESSION,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594353+00:00,2ms431us,executing: SHOW TRACE FOR SESSION in state: Open,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594362+00:00,2ms440us,planning starts: SHOW TRACE FOR SESSION,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594363+00:00,2ms441us,generating optimizer plan,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594377+00:00,2ms455us,optimizer plan failed: unsupported statement: *tree.ShowTraceForSession,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594378+00:00,2ms456us,optimizer falls back on heuristic planner,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594379+00:00,2ms457us,query is correlated: false,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.59438+00:00,2ms458us,heuristic planner starts,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594387+00:00,2ms465us,heuristic planner optimizes plan,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594393+00:00,2ms471us,heuristic planner optimizes subqueries,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594394+00:00,2ms472us,planning ends,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594399+00:00,2ms477us,checking distributability,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594402+00:00,2ms480us,query not supported for distSQL: unsupported node *sql.showTraceNode,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594403+00:00,2ms481us,distributable plan: false,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594404+00:00,2ms482us,execution starts: distributed,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594405+00:00,2ms483us,=== SPAN START: consuming rows ===,,,consuming rows,6
2018-10-05 19:01:43.594415+00:00,2ms493us,creating DistSQL plan with isLocal=true,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594432+00:00,2ms510us,running DistSQL plan,"[n1,client=127.0.0.1:58832,user=root]",,sql txn,5
2018-10-05 19:01:43.594443+00:00,2ms521us,=== SPAN START: flow ===,,,flow,7
2018-10-05 19:01:43.594458+00:00,2ms536us,"starting (1 processors, 0 startables)","[n1,client=127.0.0.1:58832,user=root]",,flow,7`;

export default exampleTraceCSV;
