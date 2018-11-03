export default [
  {
    query: "select ol_number, count(*) from tpcc.order_line group by ol_number",
    explain: "https://cockroachdb.github.io/distsqlplan/decode.html#eJyUkcFKw0AQhu8-hfynFlaapJ5ySvFUKBupLSISwpodQzBmwu4GhJJ3l2QPbYRGPf4z881-zJ7QsCapPskifkUIgQiZQGu4IGvZDGU_tNVfiAOBqmk7N5QzgYINIT7BVa4mxJB8x-0qgoAmp6p6HOsFuHNnyDpVEuJ1Ly4Wh_OLD-qtpj0pTWYVTNaDjSaT11VD-ftHck4QSDsX3yb3uKYQ_kdhU5aGSuXYrMKpQTLkjXzJZXrI5XG3WyThEgIP6VEe8n36_LRYXnWIJg6_3HdPtuXG0p8OHPSZAOmS_B9a7kxBj4aL8Rkf05EbC5qs8921D9vGtwbBSzichaN5OJqFgx9w1t98BwAA__9uWdyJ",
    trace: `span_idx,message_idx,timestamp,duration,operation,loc,tag,message,age
0,0,2018-11-03 04:39:47.202507+00:00,343ms171\\302\\265s470ns,session recording,,,=== SPAN START: session recording ===,0s
0,1,2018-11-03 04:39:47.202706+00:00,343ms171\\302\\265s470ns,session recording,,"[n1,client=127.0.0.1:65187,user=root]","[NoTxn pos:45] executing ExecStmt: SELECT ol_number, count(*) FROM tpcc.order_line GROUP BY ol_number",199\\302\\265s
0,2,2018-11-03 04:39:47.202719+00:00,343ms171\\302\\265s470ns,session recording,,"[n1,client=127.0.0.1:65187,user=root]","executing: SELECT ol_number, count(*) FROM tpcc.order_line GROUP BY ol_number in state: NoTxn",212\\302\\265s
1,0,2018-11-03 04:39:47.202728+00:00,342ms919\\302\\265s872ns,sql txn,,,=== SPAN START: sql txn ===,221\\302\\265s
1,1,2018-11-03 04:39:47.202765+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]","[Open pos:45] executing ExecStmt: SELECT ol_number, count(*) FROM tpcc.order_line GROUP BY ol_number",258\\302\\265s
1,2,2018-11-03 04:39:47.202769+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]","executing: SELECT ol_number, count(*) FROM tpcc.order_line GROUP BY ol_number in state: Open",262\\302\\265s
1,3,2018-11-03 04:39:47.202791+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",planning starts: SELECT,284\\302\\265s
1,4,2018-11-03 04:39:47.202797+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",generating optimizer plan,290\\302\\265s
1,5,2018-11-03 04:39:47.202825+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",added table 'tpcc.public.order_line' to table collection,318\\302\\265s
1,6,2018-11-03 04:39:47.202953+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",optimizer plan succeeded,446\\302\\265s
1,7,2018-11-03 04:39:47.202955+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",planning ends,448\\302\\265s
1,8,2018-11-03 04:39:47.202958+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",checking distributability,451\\302\\265s
1,9,2018-11-03 04:39:47.202962+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",distributable plan: true,455\\302\\265s
1,10,2018-11-03 04:39:47.202969+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",execution starts: distributed,462\\302\\265s
2,0,2018-11-03 04:39:47.20297+00:00,342ms580\\302\\265s432ns,consuming rows,,,=== SPAN START: consuming rows ===,463\\302\\265s
1,11,2018-11-03 04:39:47.20298+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",creating DistSQL plan with isLocal=false,473\\302\\265s
1,12,2018-11-03 04:39:47.203006+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",querying next range at /Table/58/2,499\\302\\265s
1,13,2018-11-03 04:39:47.203075+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",running DistSQL plan,568\\302\\265s
3,0,2018-11-03 04:39:47.20311+00:00,503\\302\\265s477ns,/cockroach.sql.distsqlrun.DistSQL/SetupFlow,,,=== SPAN START: /cockroach.sql.distsqlrun.DistSQL/SetupFlow ===,603\\302\\265s
4,0,2018-11-03 04:39:47.20364+00:00,341ms931\\302\\265s937ns,flow,,,=== SPAN START: flow ===,1ms133\\302\\265s
4,1,2018-11-03 04:39:47.203698+00:00,341ms931\\302\\265s937ns,flow,,"[n1,client=127.0.0.1:65187,user=root]","starting (1 processors, 0 startables)",1ms191\\302\\265s
99,0,2018-11-03 04:39:47.203708+00:00,1ns,noop,,,"=== SPAN START: noop ===
cockroach.processorid: 2",1ms201\\302\\265s
1,14,2018-11-03 04:39:47.545581+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",execution ends,343ms74\\302\\265s
1,15,2018-11-03 04:39:47.545583+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",rows affected: 15,343ms76\\302\\265s
1,16,2018-11-03 04:39:47.545644+00:00,342ms919\\302\\265s872ns,sql txn,,"[n1,client=127.0.0.1:65187,user=root]",AutoCommit. err: <nil>,343ms137\\302\\265s
0,3,2018-11-03 04:39:47.545652+00:00,343ms171\\302\\265s470ns,session recording,,"[n1,client=127.0.0.1:65187,user=root]",releasing 1 tables,343ms145\\302\\265s
0,4,2018-11-03 04:39:47.545669+00:00,343ms171\\302\\265s470ns,session recording,,"[n1,client=127.0.0.1:65187,user=root]",[NoTxn pos:46] executing ExecStmt: SET TRACING = off,343ms162\\302\\265s
0,5,2018-11-03 04:39:47.545677+00:00,343ms171\\302\\265s470ns,session recording,,"[n1,client=127.0.0.1:65187,user=root]",executing: SET TRACING = off in state: NoTxn,343ms170\\302\\265s
5,0,2018-11-03 04:39:47.203554+00:00,1ns,table reader,,,"=== SPAN START: table reader ===
cockroach.processorid: 0
cockroach.stat.tablereader.input.rows: 299890
cockroach.stat.tablereader.stalltime: 177.609ms",1ms47\\302\\265s
5,1,2018-11-03 04:39:47.203599+00:00,1ns,table reader,,[n2],Scan /Table/58/{2-3},1ms92\\302\\265s
6,0,2018-11-03 04:39:47.203604+00:00,2ms381\\302\\265s219ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,1ms97\\302\\265s
7,0,2018-11-03 04:39:47.203627+00:00,2ms353\\302\\265s804ns,dist sender send,,,=== SPAN START: dist sender send ===,1ms120\\302\\265s
7,1,2018-11-03 04:39:47.203641+00:00,2ms353\\302\\265s804ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2,1ms134\\302\\265s
7,2,2018-11-03 04:39:47.203678+00:00,2ms353\\302\\265s804ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",1ms171\\302\\265s
7,3,2018-11-03 04:39:47.203681+00:00,2ms353\\302\\265s804ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,1ms174\\302\\265s
8,0,2018-11-03 04:39:47.203686+00:00,2ms290\\302\\265s699ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,1ms179\\302\\265s
8,1,2018-11-03 04:39:47.203689+00:00,2ms290\\302\\265s699ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,1ms182\\302\\265s
8,2,2018-11-03 04:39:47.203728+00:00,2ms290\\302\\265s699ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,1ms221\\302\\265s
8,3,2018-11-03 04:39:47.203739+00:00,2ms290\\302\\265s699ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,1ms232\\302\\265s
8,4,2018-11-03 04:39:47.203748+00:00,2ms290\\302\\265s699ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,1ms241\\302\\265s
8,5,2018-11-03 04:39:47.203768+00:00,2ms290\\302\\265s699ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,1ms261\\302\\265s
8,6,2018-11-03 04:39:47.205946+00:00,2ms290\\302\\265s699ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,3ms439\\302\\265s
5,2,2018-11-03 04:39:47.215419+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/1/0/973/8/0-3},12ms912\\302\\265s
9,0,2018-11-03 04:39:47.215431+00:00,2ms505\\302\\265s509ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,12ms924\\302\\265s
10,0,2018-11-03 04:39:47.215467+00:00,2ms460\\302\\265s34ns,dist sender send,,,=== SPAN START: dist sender send ===,12ms960\\302\\265s
10,1,2018-11-03 04:39:47.215485+00:00,2ms460\\302\\265s34ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/1/0/973/8/0,12ms978\\302\\265s
10,2,2018-11-03 04:39:47.215535+00:00,2ms460\\302\\265s34ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",13ms28\\302\\265s
10,3,2018-11-03 04:39:47.215538+00:00,2ms460\\302\\265s34ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,13ms31\\302\\265s
11,0,2018-11-03 04:39:47.215544+00:00,2ms366\\302\\265s103ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,13ms37\\302\\265s
11,1,2018-11-03 04:39:47.215547+00:00,2ms366\\302\\265s103ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,13ms40\\302\\265s
11,2,2018-11-03 04:39:47.215559+00:00,2ms366\\302\\265s103ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,13ms52\\302\\265s
11,3,2018-11-03 04:39:47.215572+00:00,2ms366\\302\\265s103ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,13ms65\\302\\265s
11,4,2018-11-03 04:39:47.215588+00:00,2ms366\\302\\265s103ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,13ms81\\302\\265s
11,5,2018-11-03 04:39:47.215599+00:00,2ms366\\302\\265s103ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,13ms92\\302\\265s
11,6,2018-11-03 04:39:47.217836+00:00,2ms366\\302\\265s103ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,15ms329\\302\\265s
5,3,2018-11-03 04:39:47.241595+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/1/0/1970/10/0-3},39ms88\\302\\265s
12,0,2018-11-03 04:39:47.241602+00:00,2ms433\\302\\265s637ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,39ms95\\302\\265s
13,0,2018-11-03 04:39:47.241623+00:00,2ms402\\302\\265s224ns,dist sender send,,,=== SPAN START: dist sender send ===,39ms116\\302\\265s
13,1,2018-11-03 04:39:47.24164+00:00,2ms402\\302\\265s224ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/1/0/1970/10/0,39ms133\\302\\265s
13,2,2018-11-03 04:39:47.241673+00:00,2ms402\\302\\265s224ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",39ms166\\302\\265s
13,3,2018-11-03 04:39:47.241675+00:00,2ms402\\302\\265s224ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,39ms168\\302\\265s
14,0,2018-11-03 04:39:47.241679+00:00,2ms335\\302\\265s755ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,39ms172\\302\\265s
14,1,2018-11-03 04:39:47.241682+00:00,2ms335\\302\\265s755ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,39ms175\\302\\265s
14,2,2018-11-03 04:39:47.241689+00:00,2ms335\\302\\265s755ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,39ms182\\302\\265s
14,3,2018-11-03 04:39:47.241698+00:00,2ms335\\302\\265s755ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,39ms191\\302\\265s
14,4,2018-11-03 04:39:47.241713+00:00,2ms335\\302\\265s755ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,39ms206\\302\\265s
14,5,2018-11-03 04:39:47.241728+00:00,2ms335\\302\\265s755ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,39ms221\\302\\265s
14,6,2018-11-03 04:39:47.243973+00:00,2ms335\\302\\265s755ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,41ms466\\302\\265s
5,4,2018-11-03 04:39:47.253889+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/1/0/2985/4/0-3},51ms382\\302\\265s
15,0,2018-11-03 04:39:47.253896+00:00,3ms47\\302\\265s446ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,51ms389\\302\\265s
16,0,2018-11-03 04:39:47.253918+00:00,3ms11\\302\\265s276ns,dist sender send,,,=== SPAN START: dist sender send ===,51ms411\\302\\265s
16,1,2018-11-03 04:39:47.253947+00:00,3ms11\\302\\265s276ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/1/0/2985/4/0,51ms440\\302\\265s
16,2,2018-11-03 04:39:47.254007+00:00,3ms11\\302\\265s276ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",51ms500\\302\\265s
16,3,2018-11-03 04:39:47.25401+00:00,3ms11\\302\\265s276ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,51ms503\\302\\265s
17,0,2018-11-03 04:39:47.254018+00:00,2ms886\\302\\265s920ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,51ms511\\302\\265s
17,1,2018-11-03 04:39:47.254023+00:00,2ms886\\302\\265s920ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,51ms516\\302\\265s
17,2,2018-11-03 04:39:47.254033+00:00,2ms886\\302\\265s920ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,51ms526\\302\\265s
17,3,2018-11-03 04:39:47.254056+00:00,2ms886\\302\\265s920ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,51ms549\\302\\265s
17,4,2018-11-03 04:39:47.254095+00:00,2ms886\\302\\265s920ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,51ms588\\302\\265s
17,5,2018-11-03 04:39:47.254139+00:00,2ms886\\302\\265s920ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,51ms632\\302\\265s
17,6,2018-11-03 04:39:47.256829+00:00,2ms886\\302\\265s920ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,54ms322\\302\\265s
5,5,2018-11-03 04:39:47.266251+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/2/0/976/10/0-3},63ms744\\302\\265s
18,0,2018-11-03 04:39:47.266257+00:00,2ms26\\302\\265s225ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,63ms750\\302\\265s
19,0,2018-11-03 04:39:47.266274+00:00,2ms6\\302\\265s358ns,dist sender send,,,=== SPAN START: dist sender send ===,63ms767\\302\\265s
19,1,2018-11-03 04:39:47.266294+00:00,2ms6\\302\\265s358ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/2/0/976/10/0,63ms787\\302\\265s
19,2,2018-11-03 04:39:47.266322+00:00,2ms6\\302\\265s358ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",63ms815\\302\\265s
19,3,2018-11-03 04:39:47.266324+00:00,2ms6\\302\\265s358ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,63ms817\\302\\265s
20,0,2018-11-03 04:39:47.266328+00:00,1ms947\\302\\265s39ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,63ms821\\302\\265s
20,1,2018-11-03 04:39:47.266331+00:00,1ms947\\302\\265s39ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,63ms824\\302\\265s
20,2,2018-11-03 04:39:47.266337+00:00,1ms947\\302\\265s39ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,63ms830\\302\\265s
20,3,2018-11-03 04:39:47.266345+00:00,1ms947\\302\\265s39ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,63ms838\\302\\265s
20,4,2018-11-03 04:39:47.266359+00:00,1ms947\\302\\265s39ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,63ms852\\302\\265s
20,5,2018-11-03 04:39:47.266366+00:00,1ms947\\302\\265s39ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,63ms859\\302\\265s
20,6,2018-11-03 04:39:47.268254+00:00,1ms947\\302\\265s39ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,65ms747\\302\\265s
5,6,2018-11-03 04:39:47.277641+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/2/0/1989/5/0-3},75ms134\\302\\265s
21,0,2018-11-03 04:39:47.277646+00:00,2ms21\\302\\265s290ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,75ms139\\302\\265s
22,0,2018-11-03 04:39:47.27766+00:00,2ms4\\302\\265s509ns,dist sender send,,,=== SPAN START: dist sender send ===,75ms153\\302\\265s
22,1,2018-11-03 04:39:47.277676+00:00,2ms4\\302\\265s509ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/2/0/1989/5/0,75ms169\\302\\265s
22,2,2018-11-03 04:39:47.277702+00:00,2ms4\\302\\265s509ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",75ms195\\302\\265s
22,3,2018-11-03 04:39:47.277704+00:00,2ms4\\302\\265s509ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,75ms197\\302\\265s
23,0,2018-11-03 04:39:47.277707+00:00,1ms951\\302\\265s952ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,75ms200\\302\\265s
23,1,2018-11-03 04:39:47.277713+00:00,1ms951\\302\\265s952ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,75ms206\\302\\265s
23,2,2018-11-03 04:39:47.277718+00:00,1ms951\\302\\265s952ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,75ms211\\302\\265s
23,3,2018-11-03 04:39:47.277724+00:00,1ms951\\302\\265s952ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,75ms217\\302\\265s
23,4,2018-11-03 04:39:47.277732+00:00,1ms951\\302\\265s952ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,75ms225\\302\\265s
23,5,2018-11-03 04:39:47.277739+00:00,1ms951\\302\\265s952ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,75ms232\\302\\265s
23,6,2018-11-03 04:39:47.279636+00:00,1ms951\\302\\265s952ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,77ms129\\302\\265s
5,7,2018-11-03 04:39:47.289528+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/2/0/2985/5/0-3},87ms21\\302\\265s
24,0,2018-11-03 04:39:47.289532+00:00,1ms967\\302\\265s886ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,87ms25\\302\\265s
25,0,2018-11-03 04:39:47.289545+00:00,1ms951\\302\\265s443ns,dist sender send,,,=== SPAN START: dist sender send ===,87ms38\\302\\265s
25,1,2018-11-03 04:39:47.289568+00:00,1ms951\\302\\265s443ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/2/0/2985/5/0,87ms61\\302\\265s
25,2,2018-11-03 04:39:47.289593+00:00,1ms951\\302\\265s443ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",87ms86\\302\\265s
25,3,2018-11-03 04:39:47.289596+00:00,1ms951\\302\\265s443ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,87ms89\\302\\265s
26,0,2018-11-03 04:39:47.289599+00:00,1ms894\\302\\265s478ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,87ms92\\302\\265s
26,1,2018-11-03 04:39:47.289604+00:00,1ms894\\302\\265s478ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,87ms97\\302\\265s
26,2,2018-11-03 04:39:47.28961+00:00,1ms894\\302\\265s478ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,87ms103\\302\\265s
26,3,2018-11-03 04:39:47.289617+00:00,1ms894\\302\\265s478ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,87ms110\\302\\265s
26,4,2018-11-03 04:39:47.289625+00:00,1ms894\\302\\265s478ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,87ms118\\302\\265s
26,5,2018-11-03 04:39:47.289648+00:00,1ms894\\302\\265s478ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,87ms141\\302\\265s
26,6,2018-11-03 04:39:47.291475+00:00,1ms894\\302\\265s478ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,88ms968\\302\\265s
5,8,2018-11-03 04:39:47.300479+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/3/0/973/5/0-3},97ms972\\302\\265s
27,0,2018-11-03 04:39:47.300483+00:00,1ms933\\302\\265s311ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,97ms976\\302\\265s
28,0,2018-11-03 04:39:47.300499+00:00,1ms914\\302\\265s680ns,dist sender send,,,=== SPAN START: dist sender send ===,97ms992\\302\\265s
28,1,2018-11-03 04:39:47.30051+00:00,1ms914\\302\\265s680ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/3/0/973/5/0,98ms3\\302\\265s
28,2,2018-11-03 04:39:47.300534+00:00,1ms914\\302\\265s680ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",98ms27\\302\\265s
28,3,2018-11-03 04:39:47.300537+00:00,1ms914\\302\\265s680ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,98ms30\\302\\265s
29,0,2018-11-03 04:39:47.30054+00:00,1ms870\\302\\265s19ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,98ms33\\302\\265s
29,1,2018-11-03 04:39:47.300542+00:00,1ms870\\302\\265s19ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,98ms35\\302\\265s
29,2,2018-11-03 04:39:47.300547+00:00,1ms870\\302\\265s19ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,98ms40\\302\\265s
29,3,2018-11-03 04:39:47.300553+00:00,1ms870\\302\\265s19ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,98ms46\\302\\265s
29,4,2018-11-03 04:39:47.300564+00:00,1ms870\\302\\265s19ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,98ms57\\302\\265s
29,5,2018-11-03 04:39:47.30057+00:00,1ms870\\302\\265s19ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,98ms63\\302\\265s
29,6,2018-11-03 04:39:47.302391+00:00,1ms870\\302\\265s19ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,99ms884\\302\\265s
5,9,2018-11-03 04:39:47.311785+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/3/0/1987/7/0-3},109ms278\\302\\265s
30,0,2018-11-03 04:39:47.311797+00:00,2ms229\\302\\265s127ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,109ms290\\302\\265s
31,0,2018-11-03 04:39:47.311813+00:00,2ms206\\302\\265s851ns,dist sender send,,,=== SPAN START: dist sender send ===,109ms306\\302\\265s
31,1,2018-11-03 04:39:47.311827+00:00,2ms206\\302\\265s851ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/3/0/1987/7/0,109ms320\\302\\265s
31,2,2018-11-03 04:39:47.311852+00:00,2ms206\\302\\265s851ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",109ms345\\302\\265s
31,3,2018-11-03 04:39:47.311854+00:00,2ms206\\302\\265s851ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,109ms347\\302\\265s
32,0,2018-11-03 04:39:47.311858+00:00,2ms156\\302\\265s927ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,109ms351\\302\\265s
32,1,2018-11-03 04:39:47.311861+00:00,2ms156\\302\\265s927ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,109ms354\\302\\265s
32,2,2018-11-03 04:39:47.311865+00:00,2ms156\\302\\265s927ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,109ms358\\302\\265s
32,3,2018-11-03 04:39:47.311872+00:00,2ms156\\302\\265s927ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,109ms365\\302\\265s
32,4,2018-11-03 04:39:47.31188+00:00,2ms156\\302\\265s927ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,109ms373\\302\\265s
32,5,2018-11-03 04:39:47.311891+00:00,2ms156\\302\\265s927ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,109ms384\\302\\265s
32,6,2018-11-03 04:39:47.313995+00:00,2ms156\\302\\265s927ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,111ms488\\302\\265s
5,10,2018-11-03 04:39:47.323516+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/3/0/2996/6/0-3},121ms9\\302\\265s
33,0,2018-11-03 04:39:47.323519+00:00,1ms989\\302\\265s40ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,121ms12\\302\\265s
34,0,2018-11-03 04:39:47.323549+00:00,1ms955\\302\\265s868ns,dist sender send,,,=== SPAN START: dist sender send ===,121ms42\\302\\265s
34,1,2018-11-03 04:39:47.323598+00:00,1ms955\\302\\265s868ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/3/0/2996/6/0,121ms91\\302\\265s
34,2,2018-11-03 04:39:47.323627+00:00,1ms955\\302\\265s868ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",121ms120\\302\\265s
34,3,2018-11-03 04:39:47.323629+00:00,1ms955\\302\\265s868ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,121ms122\\302\\265s
35,0,2018-11-03 04:39:47.323633+00:00,1ms868\\302\\265s130ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,121ms126\\302\\265s
35,1,2018-11-03 04:39:47.323636+00:00,1ms868\\302\\265s130ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,121ms129\\302\\265s
35,2,2018-11-03 04:39:47.323641+00:00,1ms868\\302\\265s130ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,121ms134\\302\\265s
35,3,2018-11-03 04:39:47.323648+00:00,1ms868\\302\\265s130ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,121ms141\\302\\265s
35,4,2018-11-03 04:39:47.32366+00:00,1ms868\\302\\265s130ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,121ms153\\302\\265s
35,5,2018-11-03 04:39:47.323668+00:00,1ms868\\302\\265s130ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,121ms161\\302\\265s
35,6,2018-11-03 04:39:47.325485+00:00,1ms868\\302\\265s130ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,122ms978\\302\\265s
5,11,2018-11-03 04:39:47.33554+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/4/0/1019/1/0-3},133ms33\\302\\265s
36,0,2018-11-03 04:39:47.335544+00:00,1ms921\\302\\265s451ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,133ms37\\302\\265s
37,0,2018-11-03 04:39:47.33557+00:00,1ms893\\302\\265s340ns,dist sender send,,,=== SPAN START: dist sender send ===,133ms63\\302\\265s
37,1,2018-11-03 04:39:47.33559+00:00,1ms893\\302\\265s340ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/4/0/1019/1/0,133ms83\\302\\265s
37,2,2018-11-03 04:39:47.335615+00:00,1ms893\\302\\265s340ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",133ms108\\302\\265s
37,3,2018-11-03 04:39:47.335617+00:00,1ms893\\302\\265s340ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,133ms110\\302\\265s
38,0,2018-11-03 04:39:47.33562+00:00,1ms839\\302\\265s155ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,133ms113\\302\\265s
38,1,2018-11-03 04:39:47.335623+00:00,1ms839\\302\\265s155ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,133ms116\\302\\265s
38,2,2018-11-03 04:39:47.335627+00:00,1ms839\\302\\265s155ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,133ms120\\302\\265s
38,3,2018-11-03 04:39:47.335633+00:00,1ms839\\302\\265s155ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,133ms126\\302\\265s
38,4,2018-11-03 04:39:47.335641+00:00,1ms839\\302\\265s155ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,133ms134\\302\\265s
38,5,2018-11-03 04:39:47.335647+00:00,1ms839\\302\\265s155ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,133ms140\\302\\265s
38,6,2018-11-03 04:39:47.337442+00:00,1ms839\\302\\265s155ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,134ms935\\302\\265s
5,12,2018-11-03 04:39:47.346665+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/4/0/2019/5/0-3},144ms158\\302\\265s
39,0,2018-11-03 04:39:47.346667+00:00,1ms788\\302\\265s106ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,144ms160\\302\\265s
40,0,2018-11-03 04:39:47.346673+00:00,1ms779\\302\\265s765ns,dist sender send,,,=== SPAN START: dist sender send ===,144ms166\\302\\265s
40,1,2018-11-03 04:39:47.346685+00:00,1ms779\\302\\265s765ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/4/0/2019/5/0,144ms178\\302\\265s
40,2,2018-11-03 04:39:47.346699+00:00,1ms779\\302\\265s765ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",144ms192\\302\\265s
40,3,2018-11-03 04:39:47.3467+00:00,1ms779\\302\\265s765ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,144ms193\\302\\265s
41,0,2018-11-03 04:39:47.346702+00:00,1ms748\\302\\265s344ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,144ms195\\302\\265s
41,1,2018-11-03 04:39:47.346704+00:00,1ms748\\302\\265s344ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,144ms197\\302\\265s
41,2,2018-11-03 04:39:47.346707+00:00,1ms748\\302\\265s344ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,144ms200\\302\\265s
41,3,2018-11-03 04:39:47.346711+00:00,1ms748\\302\\265s344ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,144ms204\\302\\265s
41,4,2018-11-03 04:39:47.346719+00:00,1ms748\\302\\265s344ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,144ms212\\302\\265s
41,5,2018-11-03 04:39:47.346724+00:00,1ms748\\302\\265s344ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,144ms217\\302\\265s
41,6,2018-11-03 04:39:47.348439+00:00,1ms748\\302\\265s344ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,145ms932\\302\\265s
5,13,2018-11-03 04:39:47.356874+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/5/0/10/6/0-3},154ms367\\302\\265s
42,0,2018-11-03 04:39:47.356876+00:00,1ms709\\302\\265s742ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,154ms369\\302\\265s
43,0,2018-11-03 04:39:47.356889+00:00,1ms695\\302\\265s202ns,dist sender send,,,=== SPAN START: dist sender send ===,154ms382\\302\\265s
43,1,2018-11-03 04:39:47.356902+00:00,1ms695\\302\\265s202ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/5/0/10/6/0,154ms395\\302\\265s
43,2,2018-11-03 04:39:47.356917+00:00,1ms695\\302\\265s202ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",154ms410\\302\\265s
43,3,2018-11-03 04:39:47.356918+00:00,1ms695\\302\\265s202ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,154ms411\\302\\265s
44,0,2018-11-03 04:39:47.35692+00:00,1ms661\\302\\265s100ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,154ms413\\302\\265s
44,1,2018-11-03 04:39:47.356922+00:00,1ms661\\302\\265s100ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,154ms415\\302\\265s
44,2,2018-11-03 04:39:47.356925+00:00,1ms661\\302\\265s100ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,154ms418\\302\\265s
44,3,2018-11-03 04:39:47.356929+00:00,1ms661\\302\\265s100ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,154ms422\\302\\265s
44,4,2018-11-03 04:39:47.356938+00:00,1ms661\\302\\265s100ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,154ms431\\302\\265s
44,5,2018-11-03 04:39:47.356942+00:00,1ms661\\302\\265s100ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,154ms435\\302\\265s
44,6,2018-11-03 04:39:47.358567+00:00,1ms661\\302\\265s100ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,156ms60\\302\\265s
5,14,2018-11-03 04:39:47.366516+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/5/0/1008/6/0-3},164ms9\\302\\265s
45,0,2018-11-03 04:39:47.366519+00:00,1ms789\\302\\265s347ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,164ms12\\302\\265s
46,0,2018-11-03 04:39:47.366526+00:00,1ms779\\302\\265s762ns,dist sender send,,,=== SPAN START: dist sender send ===,164ms19\\302\\265s
46,1,2018-11-03 04:39:47.366537+00:00,1ms779\\302\\265s762ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/5/0/1008/6/0,164ms30\\302\\265s
46,2,2018-11-03 04:39:47.366553+00:00,1ms779\\302\\265s762ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",164ms46\\302\\265s
46,3,2018-11-03 04:39:47.366554+00:00,1ms779\\302\\265s762ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,164ms47\\302\\265s
47,0,2018-11-03 04:39:47.366557+00:00,1ms746\\302\\265s611ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,164ms50\\302\\265s
47,1,2018-11-03 04:39:47.366559+00:00,1ms746\\302\\265s611ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,164ms52\\302\\265s
47,2,2018-11-03 04:39:47.366562+00:00,1ms746\\302\\265s611ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,164ms55\\302\\265s
47,3,2018-11-03 04:39:47.366566+00:00,1ms746\\302\\265s611ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,164ms59\\302\\265s
47,4,2018-11-03 04:39:47.366572+00:00,1ms746\\302\\265s611ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,164ms65\\302\\265s
47,5,2018-11-03 04:39:47.366576+00:00,1ms746\\302\\265s611ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,164ms69\\302\\265s
47,6,2018-11-03 04:39:47.36829+00:00,1ms746\\302\\265s611ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,165ms783\\302\\265s
5,15,2018-11-03 04:39:47.376104+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/5/0/2004/1/0-3},173ms597\\302\\265s
48,0,2018-11-03 04:39:47.376106+00:00,1ms928\\302\\265s422ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,173ms599\\302\\265s
49,0,2018-11-03 04:39:47.376118+00:00,1ms915\\302\\265s329ns,dist sender send,,,=== SPAN START: dist sender send ===,173ms611\\302\\265s
49,1,2018-11-03 04:39:47.376131+00:00,1ms915\\302\\265s329ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/5/0/2004/1/0,173ms624\\302\\265s
49,2,2018-11-03 04:39:47.376147+00:00,1ms915\\302\\265s329ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",173ms640\\302\\265s
49,3,2018-11-03 04:39:47.376149+00:00,1ms915\\302\\265s329ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,173ms642\\302\\265s
50,0,2018-11-03 04:39:47.376151+00:00,1ms878\\302\\265s742ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,173ms644\\302\\265s
50,1,2018-11-03 04:39:47.376156+00:00,1ms878\\302\\265s742ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,173ms649\\302\\265s
50,2,2018-11-03 04:39:47.37616+00:00,1ms878\\302\\265s742ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,173ms653\\302\\265s
50,3,2018-11-03 04:39:47.376164+00:00,1ms878\\302\\265s742ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,173ms657\\302\\265s
50,4,2018-11-03 04:39:47.37617+00:00,1ms878\\302\\265s742ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,173ms663\\302\\265s
50,5,2018-11-03 04:39:47.37618+00:00,1ms878\\302\\265s742ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,173ms673\\302\\265s
50,6,2018-11-03 04:39:47.378016+00:00,1ms878\\302\\265s742ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,175ms509\\302\\265s
5,16,2018-11-03 04:39:47.386898+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/6/0/12/3/0-3},184ms391\\302\\265s
51,0,2018-11-03 04:39:47.3869+00:00,1ms736\\302\\265s343ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,184ms393\\302\\265s
52,0,2018-11-03 04:39:47.386909+00:00,1ms725\\302\\265s591ns,dist sender send,,,=== SPAN START: dist sender send ===,184ms402\\302\\265s
52,1,2018-11-03 04:39:47.386917+00:00,1ms725\\302\\265s591ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/6/0/12/3/0,184ms410\\302\\265s
52,2,2018-11-03 04:39:47.386938+00:00,1ms725\\302\\265s591ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",184ms431\\302\\265s
52,3,2018-11-03 04:39:47.38694+00:00,1ms725\\302\\265s591ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,184ms433\\302\\265s
53,0,2018-11-03 04:39:47.386942+00:00,1ms685\\302\\265s826ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,184ms435\\302\\265s
53,1,2018-11-03 04:39:47.386948+00:00,1ms685\\302\\265s826ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,184ms441\\302\\265s
53,2,2018-11-03 04:39:47.386952+00:00,1ms685\\302\\265s826ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,184ms445\\302\\265s
53,3,2018-11-03 04:39:47.386956+00:00,1ms685\\302\\265s826ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,184ms449\\302\\265s
53,4,2018-11-03 04:39:47.386963+00:00,1ms685\\302\\265s826ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,184ms456\\302\\265s
53,5,2018-11-03 04:39:47.386968+00:00,1ms685\\302\\265s826ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,184ms461\\302\\265s
53,6,2018-11-03 04:39:47.388614+00:00,1ms685\\302\\265s826ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,186ms107\\302\\265s
5,17,2018-11-03 04:39:47.397865+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/6/0/1025/1/0-3},195ms358\\302\\265s
54,0,2018-11-03 04:39:47.39787+00:00,1ms998\\302\\265s167ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,195ms363\\302\\265s
55,0,2018-11-03 04:39:47.397877+00:00,1ms986\\302\\265s356ns,dist sender send,,,=== SPAN START: dist sender send ===,195ms370\\302\\265s
55,1,2018-11-03 04:39:47.397884+00:00,1ms986\\302\\265s356ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/6/0/1025/1/0,195ms377\\302\\265s
55,2,2018-11-03 04:39:47.397897+00:00,1ms986\\302\\265s356ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",195ms390\\302\\265s
55,3,2018-11-03 04:39:47.397899+00:00,1ms986\\302\\265s356ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,195ms392\\302\\265s
56,0,2018-11-03 04:39:47.397901+00:00,1ms959\\302\\265s381ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,195ms394\\302\\265s
56,1,2018-11-03 04:39:47.397903+00:00,1ms959\\302\\265s381ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,195ms396\\302\\265s
56,2,2018-11-03 04:39:47.397906+00:00,1ms959\\302\\265s381ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,195ms399\\302\\265s
56,3,2018-11-03 04:39:47.397909+00:00,1ms959\\302\\265s381ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,195ms402\\302\\265s
56,4,2018-11-03 04:39:47.397914+00:00,1ms959\\302\\265s381ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,195ms407\\302\\265s
56,5,2018-11-03 04:39:47.397921+00:00,1ms959\\302\\265s381ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,195ms414\\302\\265s
56,6,2018-11-03 04:39:47.399835+00:00,1ms959\\302\\265s381ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,197ms328\\302\\265s
5,18,2018-11-03 04:39:47.40874+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/6/0/2016/6/0-3},206ms233\\302\\265s
57,0,2018-11-03 04:39:47.408745+00:00,1ms815\\302\\265s300ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,206ms238\\302\\265s
58,0,2018-11-03 04:39:47.408762+00:00,1ms794\\302\\265s699ns,dist sender send,,,=== SPAN START: dist sender send ===,206ms255\\302\\265s
58,1,2018-11-03 04:39:47.408785+00:00,1ms794\\302\\265s699ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/6/0/2016/6/0,206ms278\\302\\265s
58,2,2018-11-03 04:39:47.408809+00:00,1ms794\\302\\265s699ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",206ms302\\302\\265s
58,3,2018-11-03 04:39:47.408811+00:00,1ms794\\302\\265s699ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,206ms304\\302\\265s
59,0,2018-11-03 04:39:47.408814+00:00,1ms739\\302\\265s26ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,206ms307\\302\\265s
59,1,2018-11-03 04:39:47.408817+00:00,1ms739\\302\\265s26ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,206ms310\\302\\265s
59,2,2018-11-03 04:39:47.408822+00:00,1ms739\\302\\265s26ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,206ms315\\302\\265s
59,3,2018-11-03 04:39:47.40883+00:00,1ms739\\302\\265s26ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,206ms323\\302\\265s
59,4,2018-11-03 04:39:47.408838+00:00,1ms739\\302\\265s26ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,206ms331\\302\\265s
59,5,2018-11-03 04:39:47.408845+00:00,1ms739\\302\\265s26ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,206ms338\\302\\265s
59,6,2018-11-03 04:39:47.410534+00:00,1ms739\\302\\265s26ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,208ms27\\302\\265s
5,19,2018-11-03 04:39:47.41853+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/7/0/26/7/0-3},216ms23\\302\\265s
60,0,2018-11-03 04:39:47.418532+00:00,1ms680\\302\\265s426ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,216ms25\\302\\265s
61,0,2018-11-03 04:39:47.418541+00:00,1ms669\\302\\265s29ns,dist sender send,,,=== SPAN START: dist sender send ===,216ms34\\302\\265s
61,1,2018-11-03 04:39:47.418549+00:00,1ms669\\302\\265s29ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/7/0/26/7/0,216ms42\\302\\265s
61,2,2018-11-03 04:39:47.418563+00:00,1ms669\\302\\265s29ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",216ms56\\302\\265s
61,3,2018-11-03 04:39:47.418564+00:00,1ms669\\302\\265s29ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,216ms57\\302\\265s
62,0,2018-11-03 04:39:47.418566+00:00,1ms641\\302\\265s540ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,216ms59\\302\\265s
62,1,2018-11-03 04:39:47.418568+00:00,1ms641\\302\\265s540ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,216ms61\\302\\265s
62,2,2018-11-03 04:39:47.418571+00:00,1ms641\\302\\265s540ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,216ms64\\302\\265s
62,3,2018-11-03 04:39:47.418575+00:00,1ms641\\302\\265s540ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,216ms68\\302\\265s
62,4,2018-11-03 04:39:47.41858+00:00,1ms641\\302\\265s540ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,216ms73\\302\\265s
62,5,2018-11-03 04:39:47.418588+00:00,1ms641\\302\\265s540ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,216ms81\\302\\265s
62,6,2018-11-03 04:39:47.420196+00:00,1ms641\\302\\265s540ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,217ms689\\302\\265s
5,20,2018-11-03 04:39:47.427932+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/7/0/1034/2/0-3},225ms425\\302\\265s
63,0,2018-11-03 04:39:47.427933+00:00,2ms289\\302\\265s609ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,225ms426\\302\\265s
64,0,2018-11-03 04:39:47.427939+00:00,2ms281\\302\\265s248ns,dist sender send,,,=== SPAN START: dist sender send ===,225ms432\\302\\265s
64,1,2018-11-03 04:39:47.427949+00:00,2ms281\\302\\265s248ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/7/0/1034/2/0,225ms442\\302\\265s
64,2,2018-11-03 04:39:47.42796+00:00,2ms281\\302\\265s248ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",225ms453\\302\\265s
64,3,2018-11-03 04:39:47.427961+00:00,2ms281\\302\\265s248ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,225ms454\\302\\265s
65,0,2018-11-03 04:39:47.427963+00:00,2ms251\\302\\265s734ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,225ms456\\302\\265s
65,1,2018-11-03 04:39:47.42797+00:00,2ms251\\302\\265s734ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,225ms463\\302\\265s
65,2,2018-11-03 04:39:47.427974+00:00,2ms251\\302\\265s734ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,225ms467\\302\\265s
65,3,2018-11-03 04:39:47.427977+00:00,2ms251\\302\\265s734ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,225ms470\\302\\265s
65,4,2018-11-03 04:39:47.427981+00:00,2ms251\\302\\265s734ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,225ms474\\302\\265s
65,5,2018-11-03 04:39:47.427984+00:00,2ms251\\302\\265s734ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,225ms477\\302\\265s
65,6,2018-11-03 04:39:47.430194+00:00,2ms251\\302\\265s734ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,227ms687\\302\\265s
5,21,2018-11-03 04:39:47.43788+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/7/0/2049/12/0-3},235ms373\\302\\265s
66,0,2018-11-03 04:39:47.437883+00:00,1ms775\\302\\265s647ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,235ms376\\302\\265s
67,0,2018-11-03 04:39:47.437895+00:00,1ms762\\302\\265s767ns,dist sender send,,,=== SPAN START: dist sender send ===,235ms388\\302\\265s
67,1,2018-11-03 04:39:47.437908+00:00,1ms762\\302\\265s767ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/7/0/2049/12/0,235ms401\\302\\265s
67,2,2018-11-03 04:39:47.437931+00:00,1ms762\\302\\265s767ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",235ms424\\302\\265s
67,3,2018-11-03 04:39:47.437933+00:00,1ms762\\302\\265s767ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,235ms426\\302\\265s
68,0,2018-11-03 04:39:47.437938+00:00,1ms716\\302\\265s686ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,235ms431\\302\\265s
68,1,2018-11-03 04:39:47.437941+00:00,1ms716\\302\\265s686ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,235ms434\\302\\265s
68,2,2018-11-03 04:39:47.437949+00:00,1ms716\\302\\265s686ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,235ms442\\302\\265s
68,3,2018-11-03 04:39:47.437955+00:00,1ms716\\302\\265s686ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,235ms448\\302\\265s
68,4,2018-11-03 04:39:47.437963+00:00,1ms716\\302\\265s686ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,235ms456\\302\\265s
68,5,2018-11-03 04:39:47.437969+00:00,1ms716\\302\\265s686ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,235ms462\\302\\265s
68,6,2018-11-03 04:39:47.439644+00:00,1ms716\\302\\265s686ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,237ms137\\302\\265s
5,22,2018-11-03 04:39:47.447432+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/8/0/53/6/0-3},244ms925\\302\\265s
69,0,2018-11-03 04:39:47.447433+00:00,1ms759\\302\\265s985ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,244ms926\\302\\265s
70,0,2018-11-03 04:39:47.447446+00:00,1ms746\\302\\265s42ns,dist sender send,,,=== SPAN START: dist sender send ===,244ms939\\302\\265s
70,1,2018-11-03 04:39:47.447454+00:00,1ms746\\302\\265s42ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/8/0/53/6/0,244ms947\\302\\265s
70,2,2018-11-03 04:39:47.447465+00:00,1ms746\\302\\265s42ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",244ms958\\302\\265s
70,3,2018-11-03 04:39:47.44747+00:00,1ms746\\302\\265s42ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,244ms963\\302\\265s
71,0,2018-11-03 04:39:47.447472+00:00,1ms717\\302\\265s613ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,244ms965\\302\\265s
71,1,2018-11-03 04:39:47.447474+00:00,1ms717\\302\\265s613ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,244ms967\\302\\265s
71,2,2018-11-03 04:39:47.447477+00:00,1ms717\\302\\265s613ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,244ms970\\302\\265s
71,3,2018-11-03 04:39:47.447481+00:00,1ms717\\302\\265s613ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,244ms974\\302\\265s
71,4,2018-11-03 04:39:47.447486+00:00,1ms717\\302\\265s613ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,244ms979\\302\\265s
71,5,2018-11-03 04:39:47.44749+00:00,1ms717\\302\\265s613ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,244ms983\\302\\265s
71,6,2018-11-03 04:39:47.449178+00:00,1ms717\\302\\265s613ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,246ms671\\302\\265s
5,23,2018-11-03 04:39:47.456897+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/8/0/1065/15/0-3},254ms390\\302\\265s
72,0,2018-11-03 04:39:47.456899+00:00,1ms906\\302\\265s842ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,254ms392\\302\\265s
73,0,2018-11-03 04:39:47.456907+00:00,1ms896\\302\\265s511ns,dist sender send,,,=== SPAN START: dist sender send ===,254ms400\\302\\265s
73,1,2018-11-03 04:39:47.456918+00:00,1ms896\\302\\265s511ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/8/0/1065/15/0,254ms411\\302\\265s
73,2,2018-11-03 04:39:47.45693+00:00,1ms896\\302\\265s511ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",254ms423\\302\\265s
73,3,2018-11-03 04:39:47.456931+00:00,1ms896\\302\\265s511ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,254ms424\\302\\265s
74,0,2018-11-03 04:39:47.456933+00:00,1ms867\\302\\265s872ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,254ms426\\302\\265s
74,1,2018-11-03 04:39:47.456936+00:00,1ms867\\302\\265s872ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,254ms429\\302\\265s
74,2,2018-11-03 04:39:47.456939+00:00,1ms867\\302\\265s872ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,254ms432\\302\\265s
74,3,2018-11-03 04:39:47.456942+00:00,1ms867\\302\\265s872ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,254ms435\\302\\265s
74,4,2018-11-03 04:39:47.456947+00:00,1ms867\\302\\265s872ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,254ms440\\302\\265s
74,5,2018-11-03 04:39:47.456951+00:00,1ms867\\302\\265s872ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,254ms444\\302\\265s
74,6,2018-11-03 04:39:47.458788+00:00,1ms867\\302\\265s872ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,256ms281\\302\\265s
5,24,2018-11-03 04:39:47.467093+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/8/0/2056/2/0-3},264ms586\\302\\265s
75,0,2018-11-03 04:39:47.467097+00:00,1ms858\\302\\265s5ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,264ms590\\302\\265s
76,0,2018-11-03 04:39:47.467119+00:00,1ms833\\302\\265s333ns,dist sender send,,,=== SPAN START: dist sender send ===,264ms612\\302\\265s
76,1,2018-11-03 04:39:47.467134+00:00,1ms833\\302\\265s333ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/8/0/2056/2/0,264ms627\\302\\265s
76,2,2018-11-03 04:39:47.467162+00:00,1ms833\\302\\265s333ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",264ms655\\302\\265s
76,3,2018-11-03 04:39:47.467164+00:00,1ms833\\302\\265s333ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,264ms657\\302\\265s
77,0,2018-11-03 04:39:47.467168+00:00,1ms778\\302\\265s585ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,264ms661\\302\\265s
77,1,2018-11-03 04:39:47.467171+00:00,1ms778\\302\\265s585ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,264ms664\\302\\265s
77,2,2018-11-03 04:39:47.467177+00:00,1ms778\\302\\265s585ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,264ms670\\302\\265s
77,3,2018-11-03 04:39:47.467184+00:00,1ms778\\302\\265s585ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,264ms677\\302\\265s
77,4,2018-11-03 04:39:47.467193+00:00,1ms778\\302\\265s585ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,264ms686\\302\\265s
77,5,2018-11-03 04:39:47.4672+00:00,1ms778\\302\\265s585ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,264ms693\\302\\265s
77,6,2018-11-03 04:39:47.468923+00:00,1ms778\\302\\265s585ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,266ms416\\302\\265s
5,25,2018-11-03 04:39:47.476881+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/9/0/54/7/0-3},274ms374\\302\\265s
78,0,2018-11-03 04:39:47.476885+00:00,1ms821\\302\\265s888ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,274ms378\\302\\265s
79,0,2018-11-03 04:39:47.476905+00:00,1ms800\\302\\265s285ns,dist sender send,,,=== SPAN START: dist sender send ===,274ms398\\302\\265s
79,1,2018-11-03 04:39:47.476918+00:00,1ms800\\302\\265s285ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/9/0/54/7/0,274ms411\\302\\265s
79,2,2018-11-03 04:39:47.476943+00:00,1ms800\\302\\265s285ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",274ms436\\302\\265s
79,3,2018-11-03 04:39:47.476945+00:00,1ms800\\302\\265s285ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,274ms438\\302\\265s
80,0,2018-11-03 04:39:47.476948+00:00,1ms753\\302\\265s191ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,274ms441\\302\\265s
80,1,2018-11-03 04:39:47.47695+00:00,1ms753\\302\\265s191ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,274ms443\\302\\265s
80,2,2018-11-03 04:39:47.476955+00:00,1ms753\\302\\265s191ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,274ms448\\302\\265s
80,3,2018-11-03 04:39:47.476961+00:00,1ms753\\302\\265s191ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,274ms454\\302\\265s
80,4,2018-11-03 04:39:47.476968+00:00,1ms753\\302\\265s191ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,274ms461\\302\\265s
80,5,2018-11-03 04:39:47.476975+00:00,1ms753\\302\\265s191ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,274ms468\\302\\265s
80,6,2018-11-03 04:39:47.478684+00:00,1ms753\\302\\265s191ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,276ms177\\302\\265s
5,26,2018-11-03 04:39:47.48682+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/9/0/1049/8/0-3},284ms313\\302\\265s
81,0,2018-11-03 04:39:47.486822+00:00,1ms739\\302\\265s663ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,284ms315\\302\\265s
82,0,2018-11-03 04:39:47.486829+00:00,1ms731\\302\\265s265ns,dist sender send,,,=== SPAN START: dist sender send ===,284ms322\\302\\265s
82,1,2018-11-03 04:39:47.48684+00:00,1ms731\\302\\265s265ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/9/0/1049/8/0,284ms333\\302\\265s
82,2,2018-11-03 04:39:47.486857+00:00,1ms731\\302\\265s265ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",284ms350\\302\\265s
82,3,2018-11-03 04:39:47.486858+00:00,1ms731\\302\\265s265ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,284ms351\\302\\265s
83,0,2018-11-03 04:39:47.48686+00:00,1ms696\\302\\265s989ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,284ms353\\302\\265s
83,1,2018-11-03 04:39:47.486867+00:00,1ms696\\302\\265s989ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,284ms360\\302\\265s
83,2,2018-11-03 04:39:47.486871+00:00,1ms696\\302\\265s989ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,284ms364\\302\\265s
83,3,2018-11-03 04:39:47.486875+00:00,1ms696\\302\\265s989ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,284ms368\\302\\265s
83,4,2018-11-03 04:39:47.48688+00:00,1ms696\\302\\265s989ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,284ms373\\302\\265s
83,5,2018-11-03 04:39:47.486889+00:00,1ms696\\302\\265s989ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,284ms382\\302\\265s
83,6,2018-11-03 04:39:47.488547+00:00,1ms696\\302\\265s989ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,286ms40\\302\\265s
5,27,2018-11-03 04:39:47.496707+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/9/0/2041/5/0-3},294ms200\\302\\265s
84,0,2018-11-03 04:39:47.496714+00:00,2ms393\\302\\265s646ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,294ms207\\302\\265s
85,0,2018-11-03 04:39:47.496734+00:00,2ms369\\302\\265s289ns,dist sender send,,,=== SPAN START: dist sender send ===,294ms227\\302\\265s
85,1,2018-11-03 04:39:47.496747+00:00,2ms369\\302\\265s289ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/9/0/2041/5/0,294ms240\\302\\265s
85,2,2018-11-03 04:39:47.496785+00:00,2ms369\\302\\265s289ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",294ms278\\302\\265s
85,3,2018-11-03 04:39:47.496787+00:00,2ms369\\302\\265s289ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,294ms280\\302\\265s
86,0,2018-11-03 04:39:47.496792+00:00,2ms303\\302\\265s376ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,294ms285\\302\\265s
86,1,2018-11-03 04:39:47.496799+00:00,2ms303\\302\\265s376ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,294ms292\\302\\265s
86,2,2018-11-03 04:39:47.496805+00:00,2ms303\\302\\265s376ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,294ms298\\302\\265s
86,3,2018-11-03 04:39:47.496812+00:00,2ms303\\302\\265s376ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,294ms305\\302\\265s
86,4,2018-11-03 04:39:47.496821+00:00,2ms303\\302\\265s376ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,294ms314\\302\\265s
86,5,2018-11-03 04:39:47.496828+00:00,2ms303\\302\\265s376ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,294ms321\\302\\265s
86,6,2018-11-03 04:39:47.499068+00:00,2ms303\\302\\265s376ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,296ms561\\302\\265s
5,28,2018-11-03 04:39:47.507865+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/10/0/32/3/0-3},305ms358\\302\\265s
87,0,2018-11-03 04:39:47.50787+00:00,2ms172\\302\\265s857ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,305ms363\\302\\265s
88,0,2018-11-03 04:39:47.507916+00:00,2ms120\\302\\265s662ns,dist sender send,,,=== SPAN START: dist sender send ===,305ms409\\302\\265s
88,1,2018-11-03 04:39:47.507929+00:00,2ms120\\302\\265s662ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/10/0/32/3/0,305ms422\\302\\265s
88,2,2018-11-03 04:39:47.507977+00:00,2ms120\\302\\265s662ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",305ms470\\302\\265s
88,3,2018-11-03 04:39:47.507979+00:00,2ms120\\302\\265s662ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,305ms472\\302\\265s
89,0,2018-11-03 04:39:47.507983+00:00,2ms41\\302\\265s647ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,305ms476\\302\\265s
89,1,2018-11-03 04:39:47.507989+00:00,2ms41\\302\\265s647ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,305ms482\\302\\265s
89,2,2018-11-03 04:39:47.507996+00:00,2ms41\\302\\265s647ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,305ms489\\302\\265s
89,3,2018-11-03 04:39:47.508004+00:00,2ms41\\302\\265s647ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,305ms497\\302\\265s
89,4,2018-11-03 04:39:47.508013+00:00,2ms41\\302\\265s647ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,305ms506\\302\\265s
89,5,2018-11-03 04:39:47.508021+00:00,2ms41\\302\\265s647ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,305ms514\\302\\265s
89,6,2018-11-03 04:39:47.509983+00:00,2ms41\\302\\265s647ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,307ms476\\302\\265s
5,29,2018-11-03 04:39:47.520792+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/10/0/1031/8/0-3},318ms285\\302\\265s
90,0,2018-11-03 04:39:47.520796+00:00,2ms745\\302\\265s238ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,318ms289\\302\\265s
91,0,2018-11-03 04:39:47.520805+00:00,2ms732\\302\\265s409ns,dist sender send,,,=== SPAN START: dist sender send ===,318ms298\\302\\265s
91,1,2018-11-03 04:39:47.520815+00:00,2ms732\\302\\265s409ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/10/0/1031/8/0,318ms308\\302\\265s
91,2,2018-11-03 04:39:47.520837+00:00,2ms732\\302\\265s409ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",318ms330\\302\\265s
91,3,2018-11-03 04:39:47.520839+00:00,2ms732\\302\\265s409ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,318ms332\\302\\265s
92,0,2018-11-03 04:39:47.520842+00:00,2ms690\\302\\265s6ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,318ms335\\302\\265s
92,1,2018-11-03 04:39:47.520849+00:00,2ms690\\302\\265s6ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,318ms342\\302\\265s
92,2,2018-11-03 04:39:47.520853+00:00,2ms690\\302\\265s6ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,318ms346\\302\\265s
92,3,2018-11-03 04:39:47.52086+00:00,2ms690\\302\\265s6ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,318ms353\\302\\265s
92,4,2018-11-03 04:39:47.520867+00:00,2ms690\\302\\265s6ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,318ms360\\302\\265s
92,5,2018-11-03 04:39:47.520873+00:00,2ms690\\302\\265s6ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,318ms366\\302\\265s
92,6,2018-11-03 04:39:47.52351+00:00,2ms690\\302\\265s6ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,321ms3\\302\\265s
5,30,2018-11-03 04:39:47.532784+00:00,1ns,table reader,,[n2],Scan /Table/58/{2/0/10/0/2020/3/0-3},330ms277\\302\\265s
93,0,2018-11-03 04:39:47.532789+00:00,2ms93\\302\\265s506ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,330ms282\\302\\265s
94,0,2018-11-03 04:39:47.532803+00:00,2ms75\\302\\265s780ns,dist sender send,,,=== SPAN START: dist sender send ===,330ms296\\302\\265s
94,1,2018-11-03 04:39:47.532818+00:00,2ms75\\302\\265s780ns,dist sender send,,"[n2,txn=8d787859]",querying next range at /Table/58/2/0/10/0/2020/3/0,330ms311\\302\\265s
94,2,2018-11-03 04:39:47.532846+00:00,2ms75\\302\\265s780ns,dist sender send,,"[n2,txn=8d787859]","r119: sending batch 1 Scan to (n2,s2):1",330ms339\\302\\265s
94,3,2018-11-03 04:39:47.53285+00:00,2ms75\\302\\265s780ns,dist sender send,,"[n2,txn=8d787859]",sending request to local client,330ms343\\302\\265s
95,0,2018-11-03 04:39:47.532855+00:00,2ms19\\302\\265s177ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,330ms348\\302\\265s
95,1,2018-11-03 04:39:47.532863+00:00,2ms19\\302\\265s177ns,/cockroach.roachpb.Internal/Batch,,[n2],1 Scan,330ms356\\302\\265s
95,2,2018-11-03 04:39:47.532869+00:00,2ms19\\302\\265s177ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2]",executing 1 requests,330ms362\\302\\265s
95,3,2018-11-03 04:39:47.532878+00:00,2ms19\\302\\265s177ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read-only path,330ms371\\302\\265s
95,4,2018-11-03 04:39:47.532893+00:00,2ms19\\302\\265s177ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",command queue,330ms386\\302\\265s
95,5,2018-11-03 04:39:47.532908+00:00,2ms19\\302\\265s177ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",waiting for read lock,330ms401\\302\\265s
95,6,2018-11-03 04:39:47.534855+00:00,2ms19\\302\\265s177ns,/cockroach.roachpb.Internal/Batch,,"[n2,s2,r119/1:/Table/5{8/1/0/1/…-9}]",read completed,332ms348\\302\\265s
96,0,2018-11-03 04:39:47.205989+00:00,1ns,hash aggregator,,,"=== SPAN START: hash aggregator ===
cockroach.processorid: 1
cockroach.stat.aggregator.input.rows: 299890
cockroach.stat.aggregator.mem.max: 10 KiB
cockroach.stat.aggregator.stalltime: 253.947ms",3ms482\\302\\265s
96,1,2018-11-03 04:39:47.543461+00:00,1ns,hash aggregator,,[n2],accumulation complete,340ms954\\302\\265s
97,0,2018-11-03 04:39:47.20357+00:00,341ms181\\302\\265s837ns,outbox,,,"=== SPAN START: outbox ===
cockroach.stat.outbox.bytes_sent: 鞀
cockroach.streamid: 1",1ms63\\302\\265s
98,0,2018-11-03 04:39:47.203628+00:00,NULL,[async] drain,,,=== SPAN START: [async] drain ===,1ms121\\302\\265s
98,1,2018-11-03 04:39:47.203838+00:00,NULL,[async] drain,,[n2],Consumer sent handshake. Consuming flow scheduled: true,1ms331\\302\\265s
`,
  }
];
