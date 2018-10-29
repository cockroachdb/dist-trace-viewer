export default `span_idx,message_idx,timestamp,duration,operation,loc,tag,message,age
0,0,2018-10-26 23:13:44.311736+00:00,317ms262\\302\\265s575ns,session recording,,,=== SPAN START: session recording ===,0s
0,1,2018-10-26 23:13:44.311782+00:00,317ms262\\302\\265s575ns,session recording,,"[n1,client=[::1]:61834,user=root]","[NoTxn pos:45] executing ExecStmt: SELECT ol_number, count(*) FROM order_line GROUP BY ol_number",46\\302\\265s
0,2,2018-10-26 23:13:44.31179+00:00,317ms262\\302\\265s575ns,session recording,,"[n1,client=[::1]:61834,user=root]","executing: SELECT ol_number, count(*) FROM order_line GROUP BY ol_number in state: NoTxn",54\\302\\265s
1,0,2018-10-26 23:13:44.311803+00:00,317ms174\\302\\265s387ns,sql txn,,,=== SPAN START: sql txn ===,67\\302\\265s
1,1,2018-10-26 23:13:44.311833+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]","[Open pos:45] executing ExecStmt: SELECT ol_number, count(*) FROM order_line GROUP BY ol_number",97\\302\\265s
1,2,2018-10-26 23:13:44.311841+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]","executing: SELECT ol_number, count(*) FROM order_line GROUP BY ol_number in state: Open",105\\302\\265s
1,3,2018-10-26 23:13:44.311861+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",planning starts: SELECT,125\\302\\265s
1,4,2018-10-26 23:13:44.311863+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",generating optimizer plan,127\\302\\265s
1,5,2018-10-26 23:13:44.311886+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",added table 'tpcc.public.order_line' to table collection,150\\302\\265s
1,6,2018-10-26 23:13:44.312018+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",optimizer plan succeeded,282\\302\\265s
1,7,2018-10-26 23:13:44.31202+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",planning ends,284\\302\\265s
1,8,2018-10-26 23:13:44.312027+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",checking distributability,291\\302\\265s
1,9,2018-10-26 23:13:44.312031+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",distributable plan: true,295\\302\\265s
1,10,2018-10-26 23:13:44.312034+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",execution starts: distributed,298\\302\\265s
2,0,2018-10-26 23:13:44.312035+00:00,316ms883\\302\\265s234ns,consuming rows,,,=== SPAN START: consuming rows ===,299\\302\\265s
1,11,2018-10-26 23:13:44.312043+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",creating DistSQL plan with isLocal=false,307\\302\\265s
1,12,2018-10-26 23:13:44.312067+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",querying next range at /Table/53/2,331\\302\\265s
1,13,2018-10-26 23:13:44.312116+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",running DistSQL plan,380\\302\\265s
3,0,2018-10-26 23:13:44.312126+00:00,316ms798\\302\\265s504ns,flow,,,=== SPAN START: flow ===,390\\302\\265s
3,1,2018-10-26 23:13:44.312175+00:00,316ms798\\302\\265s504ns,flow,,"[n1,client=[::1]:61834,user=root]","starting (1 processors, 0 startables)",439\\302\\265s
4,0,2018-10-26 23:13:44.312178+00:00,1ns,table reader,,,"=== SPAN START: table reader ===
cockroach.processorid: 0
cockroach.stat.tablereader.input.rows: 299890
cockroach.stat.tablereader.stalltime: 162.707ms",442\\302\\265s
4,1,2018-10-26 23:13:44.312196+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2-3},460\\302\\265s
5,0,2018-10-26 23:13:44.312201+00:00,3ms373\\302\\265s241ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,465\\302\\265s
6,0,2018-10-26 23:13:44.312211+00:00,3ms357\\302\\265s563ns,dist sender send,,,=== SPAN START: dist sender send ===,475\\302\\265s
6,1,2018-10-26 23:13:44.312221+00:00,3ms357\\302\\265s563ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2,485\\302\\265s
6,2,2018-10-26 23:13:44.312239+00:00,3ms357\\302\\265s563ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",503\\302\\265s
6,3,2018-10-26 23:13:44.312241+00:00,3ms357\\302\\265s563ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,505\\302\\265s
7,0,2018-10-26 23:13:44.312249+00:00,3ms312\\302\\265s923ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,513\\302\\265s
7,1,2018-10-26 23:13:44.312257+00:00,3ms312\\302\\265s923ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,521\\302\\265s
7,2,2018-10-26 23:13:44.312263+00:00,3ms312\\302\\265s923ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,527\\302\\265s
7,3,2018-10-26 23:13:44.312271+00:00,3ms312\\302\\265s923ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,535\\302\\265s
7,4,2018-10-26 23:13:44.31228+00:00,3ms312\\302\\265s923ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,544\\302\\265s
7,5,2018-10-26 23:13:44.31229+00:00,3ms312\\302\\265s923ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,554\\302\\265s
7,6,2018-10-26 23:13:44.312307+00:00,3ms312\\302\\265s923ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,571\\302\\265s
7,7,2018-10-26 23:13:44.315528+00:00,3ms312\\302\\265s923ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,3ms792\\302\\265s
4,2,2018-10-26 23:13:44.326059+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/1/0/973/8/0-3},14ms323\\302\\265s
8,0,2018-10-26 23:13:44.326072+00:00,3ms73\\302\\265s126ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,14ms336\\302\\265s
9,0,2018-10-26 23:13:44.326115+00:00,3ms22\\302\\265s243ns,dist sender send,,,=== SPAN START: dist sender send ===,14ms379\\302\\265s
9,1,2018-10-26 23:13:44.326136+00:00,3ms22\\302\\265s243ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/1/0/973/8/0,14ms400\\302\\265s
9,2,2018-10-26 23:13:44.32619+00:00,3ms22\\302\\265s243ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",14ms454\\302\\265s
9,3,2018-10-26 23:13:44.326194+00:00,3ms22\\302\\265s243ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,14ms458\\302\\265s
10,0,2018-10-26 23:13:44.326202+00:00,2ms925\\302\\265s244ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,14ms466\\302\\265s
10,1,2018-10-26 23:13:44.326205+00:00,2ms925\\302\\265s244ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,14ms469\\302\\265s
10,2,2018-10-26 23:13:44.326215+00:00,2ms925\\302\\265s244ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,14ms479\\302\\265s
10,3,2018-10-26 23:13:44.32623+00:00,2ms925\\302\\265s244ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,14ms494\\302\\265s
10,4,2018-10-26 23:13:44.326238+00:00,2ms925\\302\\265s244ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,14ms502\\302\\265s
10,5,2018-10-26 23:13:44.326249+00:00,2ms925\\302\\265s244ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,14ms513\\302\\265s
10,6,2018-10-26 23:13:44.326264+00:00,2ms925\\302\\265s244ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,14ms528\\302\\265s
10,7,2018-10-26 23:13:44.329069+00:00,2ms925\\302\\265s244ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,17ms333\\302\\265s
4,3,2018-10-26 23:13:44.351039+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/1/0/1970/10/0-3},39ms303\\302\\265s
11,0,2018-10-26 23:13:44.351061+00:00,2ms512\\302\\265s173ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,39ms325\\302\\265s
12,0,2018-10-26 23:13:44.351091+00:00,2ms474\\302\\265s788ns,dist sender send,,,=== SPAN START: dist sender send ===,39ms355\\302\\265s
12,1,2018-10-26 23:13:44.351114+00:00,2ms474\\302\\265s788ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/1/0/1970/10/0,39ms378\\302\\265s
12,2,2018-10-26 23:13:44.351143+00:00,2ms474\\302\\265s788ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",39ms407\\302\\265s
12,3,2018-10-26 23:13:44.351146+00:00,2ms474\\302\\265s788ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,39ms410\\302\\265s
13,0,2018-10-26 23:13:44.351151+00:00,2ms406\\302\\265s880ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,39ms415\\302\\265s
13,1,2018-10-26 23:13:44.351154+00:00,2ms406\\302\\265s880ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,39ms418\\302\\265s
13,2,2018-10-26 23:13:44.35116+00:00,2ms406\\302\\265s880ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,39ms424\\302\\265s
13,3,2018-10-26 23:13:44.351169+00:00,2ms406\\302\\265s880ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,39ms433\\302\\265s
13,4,2018-10-26 23:13:44.351174+00:00,2ms406\\302\\265s880ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,39ms438\\302\\265s
13,5,2018-10-26 23:13:44.351181+00:00,2ms406\\302\\265s880ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,39ms445\\302\\265s
13,6,2018-10-26 23:13:44.35119+00:00,2ms406\\302\\265s880ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,39ms454\\302\\265s
13,7,2018-10-26 23:13:44.353515+00:00,2ms406\\302\\265s880ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,41ms779\\302\\265s
4,4,2018-10-26 23:13:44.36297+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/1/0/2985/4/0-3},51ms234\\302\\265s
14,0,2018-10-26 23:13:44.362977+00:00,2ms751\\302\\265s615ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,51ms241\\302\\265s
15,0,2018-10-26 23:13:44.363002+00:00,2ms719\\302\\265s80ns,dist sender send,,,=== SPAN START: dist sender send ===,51ms266\\302\\265s
15,1,2018-10-26 23:13:44.36302+00:00,2ms719\\302\\265s80ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/1/0/2985/4/0,51ms284\\302\\265s
15,2,2018-10-26 23:13:44.363069+00:00,2ms719\\302\\265s80ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",51ms333\\302\\265s
15,3,2018-10-26 23:13:44.363078+00:00,2ms719\\302\\265s80ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,51ms342\\302\\265s
16,0,2018-10-26 23:13:44.363085+00:00,2ms625\\302\\265s596ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,51ms349\\302\\265s
16,1,2018-10-26 23:13:44.363091+00:00,2ms625\\302\\265s596ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,51ms355\\302\\265s
16,2,2018-10-26 23:13:44.363104+00:00,2ms625\\302\\265s596ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,51ms368\\302\\265s
16,3,2018-10-26 23:13:44.363114+00:00,2ms625\\302\\265s596ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,51ms378\\302\\265s
16,4,2018-10-26 23:13:44.36312+00:00,2ms625\\302\\265s596ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,51ms384\\302\\265s
16,5,2018-10-26 23:13:44.363128+00:00,2ms625\\302\\265s596ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,51ms392\\302\\265s
16,6,2018-10-26 23:13:44.36314+00:00,2ms625\\302\\265s596ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,51ms404\\302\\265s
16,7,2018-10-26 23:13:44.36566+00:00,2ms625\\302\\265s596ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,53ms924\\302\\265s
4,5,2018-10-26 23:13:44.374502+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/2/0/976/10/0-3},62ms766\\302\\265s
17,0,2018-10-26 23:13:44.374508+00:00,2ms225\\302\\265s473ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,62ms772\\302\\265s
18,0,2018-10-26 23:13:44.374524+00:00,2ms201\\302\\265s242ns,dist sender send,,,=== SPAN START: dist sender send ===,62ms788\\302\\265s
18,1,2018-10-26 23:13:44.37454+00:00,2ms201\\302\\265s242ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/2/0/976/10/0,62ms804\\302\\265s
18,2,2018-10-26 23:13:44.374571+00:00,2ms201\\302\\265s242ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",62ms835\\302\\265s
18,3,2018-10-26 23:13:44.374574+00:00,2ms201\\302\\265s242ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,62ms838\\302\\265s
19,0,2018-10-26 23:13:44.374577+00:00,2ms143\\302\\265s216ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,62ms841\\302\\265s
19,1,2018-10-26 23:13:44.374584+00:00,2ms143\\302\\265s216ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,62ms848\\302\\265s
19,2,2018-10-26 23:13:44.37459+00:00,2ms143\\302\\265s216ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,62ms854\\302\\265s
19,3,2018-10-26 23:13:44.374597+00:00,2ms143\\302\\265s216ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,62ms861\\302\\265s
19,4,2018-10-26 23:13:44.374602+00:00,2ms143\\302\\265s216ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,62ms866\\302\\265s
19,5,2018-10-26 23:13:44.374608+00:00,2ms143\\302\\265s216ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,62ms872\\302\\265s
19,6,2018-10-26 23:13:44.374615+00:00,2ms143\\302\\265s216ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,62ms879\\302\\265s
19,7,2018-10-26 23:13:44.3767+00:00,2ms143\\302\\265s216ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,64ms964\\302\\265s
4,6,2018-10-26 23:13:44.385212+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/2/0/1989/5/0-3},73ms476\\302\\265s
20,0,2018-10-26 23:13:44.385218+00:00,2ms480\\302\\265s421ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,73ms482\\302\\265s
21,0,2018-10-26 23:13:44.385237+00:00,2ms456\\302\\265s69ns,dist sender send,,,=== SPAN START: dist sender send ===,73ms501\\302\\265s
21,1,2018-10-26 23:13:44.385249+00:00,2ms456\\302\\265s69ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/2/0/1989/5/0,73ms513\\302\\265s
21,2,2018-10-26 23:13:44.385276+00:00,2ms456\\302\\265s69ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",73ms540\\302\\265s
21,3,2018-10-26 23:13:44.385279+00:00,2ms456\\302\\265s69ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,73ms543\\302\\265s
22,0,2018-10-26 23:13:44.385283+00:00,2ms400\\302\\265s713ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,73ms547\\302\\265s
22,1,2018-10-26 23:13:44.385285+00:00,2ms400\\302\\265s713ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,73ms549\\302\\265s
22,2,2018-10-26 23:13:44.385291+00:00,2ms400\\302\\265s713ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,73ms555\\302\\265s
22,3,2018-10-26 23:13:44.385299+00:00,2ms400\\302\\265s713ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,73ms563\\302\\265s
22,4,2018-10-26 23:13:44.385313+00:00,2ms400\\302\\265s713ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,73ms577\\302\\265s
22,5,2018-10-26 23:13:44.385324+00:00,2ms400\\302\\265s713ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,73ms588\\302\\265s
22,6,2018-10-26 23:13:44.385333+00:00,2ms400\\302\\265s713ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,73ms597\\302\\265s
22,7,2018-10-26 23:13:44.387642+00:00,2ms400\\302\\265s713ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,75ms906\\302\\265s
4,7,2018-10-26 23:13:44.396295+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/2/0/2985/5/0-3},84ms559\\302\\265s
23,0,2018-10-26 23:13:44.396304+00:00,2ms650\\302\\265s25ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,84ms568\\302\\265s
24,0,2018-10-26 23:13:44.396344+00:00,2ms603\\302\\265s426ns,dist sender send,,,=== SPAN START: dist sender send ===,84ms608\\302\\265s
24,1,2018-10-26 23:13:44.396362+00:00,2ms603\\302\\265s426ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/2/0/2985/5/0,84ms626\\302\\265s
24,2,2018-10-26 23:13:44.396405+00:00,2ms603\\302\\265s426ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",84ms669\\302\\265s
24,3,2018-10-26 23:13:44.396409+00:00,2ms603\\302\\265s426ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,84ms673\\302\\265s
25,0,2018-10-26 23:13:44.396416+00:00,2ms522\\302\\265s456ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,84ms680\\302\\265s
25,1,2018-10-26 23:13:44.396419+00:00,2ms522\\302\\265s456ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,84ms683\\302\\265s
25,2,2018-10-26 23:13:44.396427+00:00,2ms522\\302\\265s456ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,84ms691\\302\\265s
25,3,2018-10-26 23:13:44.396437+00:00,2ms522\\302\\265s456ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,84ms701\\302\\265s
25,4,2018-10-26 23:13:44.396448+00:00,2ms522\\302\\265s456ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,84ms712\\302\\265s
25,5,2018-10-26 23:13:44.396463+00:00,2ms522\\302\\265s456ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,84ms727\\302\\265s
25,6,2018-10-26 23:13:44.396477+00:00,2ms522\\302\\265s456ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,84ms741\\302\\265s
25,7,2018-10-26 23:13:44.398893+00:00,2ms522\\302\\265s456ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,87ms157\\302\\265s
4,8,2018-10-26 23:13:44.407704+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/3/0/973/5/0-3},95ms968\\302\\265s
26,0,2018-10-26 23:13:44.407709+00:00,2ms260\\302\\265s461ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,95ms973\\302\\265s
27,0,2018-10-26 23:13:44.407727+00:00,2ms239\\302\\265s775ns,dist sender send,,,=== SPAN START: dist sender send ===,95ms991\\302\\265s
27,1,2018-10-26 23:13:44.40774+00:00,2ms239\\302\\265s775ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/3/0/973/5/0,96ms4\\302\\265s
27,2,2018-10-26 23:13:44.407763+00:00,2ms239\\302\\265s775ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",96ms27\\302\\265s
27,3,2018-10-26 23:13:44.407765+00:00,2ms239\\302\\265s775ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,96ms29\\302\\265s
28,0,2018-10-26 23:13:44.407769+00:00,2ms194\\302\\265s545ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,96ms33\\302\\265s
28,1,2018-10-26 23:13:44.407771+00:00,2ms194\\302\\265s545ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,96ms35\\302\\265s
28,2,2018-10-26 23:13:44.407777+00:00,2ms194\\302\\265s545ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,96ms41\\302\\265s
28,3,2018-10-26 23:13:44.407784+00:00,2ms194\\302\\265s545ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,96ms48\\302\\265s
28,4,2018-10-26 23:13:44.407788+00:00,2ms194\\302\\265s545ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,96ms52\\302\\265s
28,5,2018-10-26 23:13:44.407794+00:00,2ms194\\302\\265s545ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,96ms58\\302\\265s
28,6,2018-10-26 23:13:44.407801+00:00,2ms194\\302\\265s545ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,96ms65\\302\\265s
28,7,2018-10-26 23:13:44.409941+00:00,2ms194\\302\\265s545ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,98ms205\\302\\265s
4,9,2018-10-26 23:13:44.418782+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/3/0/1987/7/0-3},107ms46\\302\\265s
29,0,2018-10-26 23:13:44.418785+00:00,2ms170\\302\\265s473ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,107ms49\\302\\265s
30,0,2018-10-26 23:13:44.418792+00:00,2ms160\\302\\265s761ns,dist sender send,,,=== SPAN START: dist sender send ===,107ms56\\302\\265s
30,1,2018-10-26 23:13:44.418801+00:00,2ms160\\302\\265s761ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/3/0/1987/7/0,107ms65\\302\\265s
30,2,2018-10-26 23:13:44.418815+00:00,2ms160\\302\\265s761ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",107ms79\\302\\265s
30,3,2018-10-26 23:13:44.418817+00:00,2ms160\\302\\265s761ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,107ms81\\302\\265s
31,0,2018-10-26 23:13:44.418819+00:00,2ms130\\302\\265s857ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,107ms83\\302\\265s
31,1,2018-10-26 23:13:44.418821+00:00,2ms130\\302\\265s857ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,107ms85\\302\\265s
31,2,2018-10-26 23:13:44.418825+00:00,2ms130\\302\\265s857ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,107ms89\\302\\265s
31,3,2018-10-26 23:13:44.41883+00:00,2ms130\\302\\265s857ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,107ms94\\302\\265s
31,4,2018-10-26 23:13:44.418837+00:00,2ms130\\302\\265s857ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,107ms101\\302\\265s
31,5,2018-10-26 23:13:44.418841+00:00,2ms130\\302\\265s857ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,107ms105\\302\\265s
31,6,2018-10-26 23:13:44.418851+00:00,2ms130\\302\\265s857ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,107ms115\\302\\265s
31,7,2018-10-26 23:13:44.420935+00:00,2ms130\\302\\265s857ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,109ms199\\302\\265s
4,10,2018-10-26 23:13:44.428556+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/3/0/2996/6/0-3},116ms820\\302\\265s
32,0,2018-10-26 23:13:44.428557+00:00,1ms910\\302\\265s860ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,116ms821\\302\\265s
33,0,2018-10-26 23:13:44.42857+00:00,1ms896\\302\\265s448ns,dist sender send,,,=== SPAN START: dist sender send ===,116ms834\\302\\265s
33,1,2018-10-26 23:13:44.428579+00:00,1ms896\\302\\265s448ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/3/0/2996/6/0,116ms843\\302\\265s
33,2,2018-10-26 23:13:44.428589+00:00,1ms896\\302\\265s448ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",116ms853\\302\\265s
33,3,2018-10-26 23:13:44.42859+00:00,1ms896\\302\\265s448ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,116ms854\\302\\265s
34,0,2018-10-26 23:13:44.428592+00:00,1ms872\\302\\265s390ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,116ms856\\302\\265s
34,1,2018-10-26 23:13:44.428594+00:00,1ms872\\302\\265s390ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,116ms858\\302\\265s
34,2,2018-10-26 23:13:44.428597+00:00,1ms872\\302\\265s390ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,116ms861\\302\\265s
34,3,2018-10-26 23:13:44.4286+00:00,1ms872\\302\\265s390ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,116ms864\\302\\265s
34,4,2018-10-26 23:13:44.428602+00:00,1ms872\\302\\265s390ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,116ms866\\302\\265s
34,5,2018-10-26 23:13:44.428605+00:00,1ms872\\302\\265s390ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,116ms869\\302\\265s
34,6,2018-10-26 23:13:44.428609+00:00,1ms872\\302\\265s390ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,116ms873\\302\\265s
34,7,2018-10-26 23:13:44.430454+00:00,1ms872\\302\\265s390ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,118ms718\\302\\265s
4,11,2018-10-26 23:13:44.437779+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/4/0/1019/1/0-3},126ms43\\302\\265s
35,0,2018-10-26 23:13:44.43778+00:00,1ms822\\302\\265s254ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,126ms44\\302\\265s
36,0,2018-10-26 23:13:44.437785+00:00,1ms815\\302\\265s660ns,dist sender send,,,=== SPAN START: dist sender send ===,126ms49\\302\\265s
36,1,2018-10-26 23:13:44.437796+00:00,1ms815\\302\\265s660ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/4/0/1019/1/0,126ms60\\302\\265s
36,2,2018-10-26 23:13:44.437807+00:00,1ms815\\302\\265s660ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",126ms71\\302\\265s
36,3,2018-10-26 23:13:44.437809+00:00,1ms815\\302\\265s660ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,126ms73\\302\\265s
37,0,2018-10-26 23:13:44.437811+00:00,1ms788\\302\\265s237ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,126ms75\\302\\265s
37,1,2018-10-26 23:13:44.437813+00:00,1ms788\\302\\265s237ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,126ms77\\302\\265s
37,2,2018-10-26 23:13:44.437815+00:00,1ms788\\302\\265s237ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,126ms79\\302\\265s
37,3,2018-10-26 23:13:44.437818+00:00,1ms788\\302\\265s237ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,126ms82\\302\\265s
37,4,2018-10-26 23:13:44.43782+00:00,1ms788\\302\\265s237ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,126ms84\\302\\265s
37,5,2018-10-26 23:13:44.437824+00:00,1ms788\\302\\265s237ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,126ms88\\302\\265s
37,6,2018-10-26 23:13:44.437827+00:00,1ms788\\302\\265s237ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,126ms91\\302\\265s
37,7,2018-10-26 23:13:44.439588+00:00,1ms788\\302\\265s237ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,127ms852\\302\\265s
4,12,2018-10-26 23:13:44.446864+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/4/0/2019/5/0-3},135ms128\\302\\265s
38,0,2018-10-26 23:13:44.446866+00:00,1ms969\\302\\265s383ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,135ms130\\302\\265s
39,0,2018-10-26 23:13:44.446871+00:00,1ms961\\302\\265s782ns,dist sender send,,,=== SPAN START: dist sender send ===,135ms135\\302\\265s
39,1,2018-10-26 23:13:44.446881+00:00,1ms961\\302\\265s782ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/4/0/2019/5/0,135ms145\\302\\265s
39,2,2018-10-26 23:13:44.446892+00:00,1ms961\\302\\265s782ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",135ms156\\302\\265s
39,3,2018-10-26 23:13:44.446896+00:00,1ms961\\302\\265s782ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,135ms160\\302\\265s
40,0,2018-10-26 23:13:44.446898+00:00,1ms914\\302\\265s32ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,135ms162\\302\\265s
40,1,2018-10-26 23:13:44.446902+00:00,1ms914\\302\\265s32ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,135ms166\\302\\265s
40,2,2018-10-26 23:13:44.446905+00:00,1ms914\\302\\265s32ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,135ms169\\302\\265s
40,3,2018-10-26 23:13:44.446908+00:00,1ms914\\302\\265s32ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,135ms172\\302\\265s
40,4,2018-10-26 23:13:44.44691+00:00,1ms914\\302\\265s32ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,135ms174\\302\\265s
40,5,2018-10-26 23:13:44.446913+00:00,1ms914\\302\\265s32ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,135ms177\\302\\265s
40,6,2018-10-26 23:13:44.446917+00:00,1ms914\\302\\265s32ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,135ms181\\302\\265s
40,7,2018-10-26 23:13:44.448799+00:00,1ms914\\302\\265s32ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,137ms63\\302\\265s
4,13,2018-10-26 23:13:44.45628+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/5/0/10/6/0-3},144ms544\\302\\265s
41,0,2018-10-26 23:13:44.456282+00:00,1ms825\\302\\265s598ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,144ms546\\302\\265s
42,0,2018-10-26 23:13:44.456287+00:00,1ms818\\302\\265s638ns,dist sender send,,,=== SPAN START: dist sender send ===,144ms551\\302\\265s
42,1,2018-10-26 23:13:44.456294+00:00,1ms818\\302\\265s638ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/5/0/10/6/0,144ms558\\302\\265s
42,2,2018-10-26 23:13:44.456307+00:00,1ms818\\302\\265s638ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",144ms571\\302\\265s
42,3,2018-10-26 23:13:44.456309+00:00,1ms818\\302\\265s638ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,144ms573\\302\\265s
43,0,2018-10-26 23:13:44.45631+00:00,1ms793\\302\\265s210ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,144ms574\\302\\265s
43,1,2018-10-26 23:13:44.456312+00:00,1ms793\\302\\265s210ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,144ms576\\302\\265s
43,2,2018-10-26 23:13:44.456315+00:00,1ms793\\302\\265s210ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,144ms579\\302\\265s
43,3,2018-10-26 23:13:44.456318+00:00,1ms793\\302\\265s210ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,144ms582\\302\\265s
43,4,2018-10-26 23:13:44.456321+00:00,1ms793\\302\\265s210ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,144ms585\\302\\265s
43,5,2018-10-26 23:13:44.456327+00:00,1ms793\\302\\265s210ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,144ms591\\302\\265s
43,6,2018-10-26 23:13:44.456331+00:00,1ms793\\302\\265s210ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,144ms595\\302\\265s
43,7,2018-10-26 23:13:44.458093+00:00,1ms793\\302\\265s210ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,146ms357\\302\\265s
4,14,2018-10-26 23:13:44.466494+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/5/0/1008/6/0-3},154ms758\\302\\265s
44,0,2018-10-26 23:13:44.466499+00:00,1ms929\\302\\265s780ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,154ms763\\302\\265s
45,0,2018-10-26 23:13:44.466513+00:00,1ms913\\302\\265s152ns,dist sender send,,,=== SPAN START: dist sender send ===,154ms777\\302\\265s
45,1,2018-10-26 23:13:44.466528+00:00,1ms913\\302\\265s152ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/5/0/1008/6/0,154ms792\\302\\265s
45,2,2018-10-26 23:13:44.466551+00:00,1ms913\\302\\265s152ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",154ms815\\302\\265s
45,3,2018-10-26 23:13:44.466553+00:00,1ms913\\302\\265s152ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,154ms817\\302\\265s
46,0,2018-10-26 23:13:44.466559+00:00,1ms863\\302\\265s3ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,154ms823\\302\\265s
46,1,2018-10-26 23:13:44.466562+00:00,1ms863\\302\\265s3ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,154ms826\\302\\265s
46,2,2018-10-26 23:13:44.466566+00:00,1ms863\\302\\265s3ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,154ms830\\302\\265s
46,3,2018-10-26 23:13:44.466573+00:00,1ms863\\302\\265s3ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,154ms837\\302\\265s
46,4,2018-10-26 23:13:44.466577+00:00,1ms863\\302\\265s3ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,154ms841\\302\\265s
46,5,2018-10-26 23:13:44.466581+00:00,1ms863\\302\\265s3ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,154ms845\\302\\265s
46,6,2018-10-26 23:13:44.466591+00:00,1ms863\\302\\265s3ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,154ms855\\302\\265s
46,7,2018-10-26 23:13:44.468403+00:00,1ms863\\302\\265s3ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,156ms667\\302\\265s
4,15,2018-10-26 23:13:44.475629+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/5/0/2004/1/0-3},163ms893\\302\\265s
47,0,2018-10-26 23:13:44.475631+00:00,1ms882\\302\\265s312ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,163ms895\\302\\265s
48,0,2018-10-26 23:13:44.475637+00:00,1ms873\\302\\265s994ns,dist sender send,,,=== SPAN START: dist sender send ===,163ms901\\302\\265s
48,1,2018-10-26 23:13:44.475651+00:00,1ms873\\302\\265s994ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/5/0/2004/1/0,163ms915\\302\\265s
48,2,2018-10-26 23:13:44.475663+00:00,1ms873\\302\\265s994ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",163ms927\\302\\265s
48,3,2018-10-26 23:13:44.475665+00:00,1ms873\\302\\265s994ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,163ms929\\302\\265s
49,0,2018-10-26 23:13:44.475667+00:00,1ms841\\302\\265s675ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,163ms931\\302\\265s
49,1,2018-10-26 23:13:44.47567+00:00,1ms841\\302\\265s675ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,163ms934\\302\\265s
49,2,2018-10-26 23:13:44.475672+00:00,1ms841\\302\\265s675ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,163ms936\\302\\265s
49,3,2018-10-26 23:13:44.475676+00:00,1ms841\\302\\265s675ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,163ms940\\302\\265s
49,4,2018-10-26 23:13:44.475679+00:00,1ms841\\302\\265s675ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,163ms943\\302\\265s
49,5,2018-10-26 23:13:44.475682+00:00,1ms841\\302\\265s675ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,163ms946\\302\\265s
49,6,2018-10-26 23:13:44.475689+00:00,1ms841\\302\\265s675ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,163ms953\\302\\265s
49,7,2018-10-26 23:13:44.477496+00:00,1ms841\\302\\265s675ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,165ms760\\302\\265s
4,16,2018-10-26 23:13:44.484767+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/6/0/12/3/0-3},173ms31\\302\\265s
50,0,2018-10-26 23:13:44.484768+00:00,1ms832\\302\\265s722ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,173ms32\\302\\265s
51,0,2018-10-26 23:13:44.484773+00:00,1ms825\\302\\265s973ns,dist sender send,,,=== SPAN START: dist sender send ===,173ms37\\302\\265s
51,1,2018-10-26 23:13:44.484783+00:00,1ms825\\302\\265s973ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/6/0/12/3/0,173ms47\\302\\265s
51,2,2018-10-26 23:13:44.484793+00:00,1ms825\\302\\265s973ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",173ms57\\302\\265s
51,3,2018-10-26 23:13:44.484794+00:00,1ms825\\302\\265s973ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,173ms58\\302\\265s
52,0,2018-10-26 23:13:44.484796+00:00,1ms801\\302\\265s312ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,173ms60\\302\\265s
52,1,2018-10-26 23:13:44.4848+00:00,1ms801\\302\\265s312ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,173ms64\\302\\265s
52,2,2018-10-26 23:13:44.484803+00:00,1ms801\\302\\265s312ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,173ms67\\302\\265s
52,3,2018-10-26 23:13:44.484808+00:00,1ms801\\302\\265s312ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,173ms72\\302\\265s
52,4,2018-10-26 23:13:44.484811+00:00,1ms801\\302\\265s312ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,173ms75\\302\\265s
52,5,2018-10-26 23:13:44.484814+00:00,1ms801\\302\\265s312ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,173ms78\\302\\265s
52,6,2018-10-26 23:13:44.484818+00:00,1ms801\\302\\265s312ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,173ms82\\302\\265s
52,7,2018-10-26 23:13:44.486587+00:00,1ms801\\302\\265s312ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,174ms851\\302\\265s
4,17,2018-10-26 23:13:44.493868+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/6/0/1025/1/0-3},182ms132\\302\\265s
53,0,2018-10-26 23:13:44.493871+00:00,1ms823\\302\\265s345ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,182ms135\\302\\265s
54,0,2018-10-26 23:13:44.493878+00:00,1ms810\\302\\265s184ns,dist sender send,,,=== SPAN START: dist sender send ===,182ms142\\302\\265s
54,1,2018-10-26 23:13:44.493885+00:00,1ms810\\302\\265s184ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/6/0/1025/1/0,182ms149\\302\\265s
54,2,2018-10-26 23:13:44.493893+00:00,1ms810\\302\\265s184ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",182ms157\\302\\265s
54,3,2018-10-26 23:13:44.493895+00:00,1ms810\\302\\265s184ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,182ms159\\302\\265s
55,0,2018-10-26 23:13:44.493896+00:00,1ms789\\302\\265s859ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,182ms160\\302\\265s
55,1,2018-10-26 23:13:44.493898+00:00,1ms789\\302\\265s859ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,182ms162\\302\\265s
55,2,2018-10-26 23:13:44.493901+00:00,1ms789\\302\\265s859ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,182ms165\\302\\265s
55,3,2018-10-26 23:13:44.493904+00:00,1ms789\\302\\265s859ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,182ms168\\302\\265s
55,4,2018-10-26 23:13:44.493906+00:00,1ms789\\302\\265s859ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,182ms170\\302\\265s
55,5,2018-10-26 23:13:44.493909+00:00,1ms789\\302\\265s859ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,182ms173\\302\\265s
55,6,2018-10-26 23:13:44.493912+00:00,1ms789\\302\\265s859ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,182ms176\\302\\265s
55,7,2018-10-26 23:13:44.495675+00:00,1ms789\\302\\265s859ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,183ms939\\302\\265s
4,18,2018-10-26 23:13:44.50301+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/6/0/2016/6/0-3},191ms274\\302\\265s
56,0,2018-10-26 23:13:44.503011+00:00,1ms759\\302\\265s434ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,191ms275\\302\\265s
57,0,2018-10-26 23:13:44.503015+00:00,1ms753\\302\\265s538ns,dist sender send,,,=== SPAN START: dist sender send ===,191ms279\\302\\265s
57,1,2018-10-26 23:13:44.503021+00:00,1ms753\\302\\265s538ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/6/0/2016/6/0,191ms285\\302\\265s
57,2,2018-10-26 23:13:44.503029+00:00,1ms753\\302\\265s538ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",191ms293\\302\\265s
57,3,2018-10-26 23:13:44.50303+00:00,1ms753\\302\\265s538ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,191ms294\\302\\265s
58,0,2018-10-26 23:13:44.503032+00:00,1ms735\\302\\265s263ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,191ms296\\302\\265s
58,1,2018-10-26 23:13:44.503039+00:00,1ms735\\302\\265s263ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,191ms303\\302\\265s
58,2,2018-10-26 23:13:44.503041+00:00,1ms735\\302\\265s263ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,191ms305\\302\\265s
58,3,2018-10-26 23:13:44.503044+00:00,1ms735\\302\\265s263ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,191ms308\\302\\265s
58,4,2018-10-26 23:13:44.503046+00:00,1ms735\\302\\265s263ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,191ms310\\302\\265s
58,5,2018-10-26 23:13:44.503048+00:00,1ms735\\302\\265s263ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,191ms312\\302\\265s
58,6,2018-10-26 23:13:44.503052+00:00,1ms735\\302\\265s263ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,191ms316\\302\\265s
58,7,2018-10-26 23:13:44.504758+00:00,1ms735\\302\\265s263ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,193ms22\\302\\265s
4,19,2018-10-26 23:13:44.51176+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/7/0/26/7/0-3},200ms24\\302\\265s
59,0,2018-10-26 23:13:44.511762+00:00,1ms829\\302\\265s888ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,200ms26\\302\\265s
60,0,2018-10-26 23:13:44.511767+00:00,1ms823\\302\\265s144ns,dist sender send,,,=== SPAN START: dist sender send ===,200ms31\\302\\265s
60,1,2018-10-26 23:13:44.511784+00:00,1ms823\\302\\265s144ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/7/0/26/7/0,200ms48\\302\\265s
60,2,2018-10-26 23:13:44.511795+00:00,1ms823\\302\\265s144ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",200ms59\\302\\265s
60,3,2018-10-26 23:13:44.511797+00:00,1ms823\\302\\265s144ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,200ms61\\302\\265s
61,0,2018-10-26 23:13:44.511798+00:00,1ms789\\302\\265s325ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,200ms62\\302\\265s
61,1,2018-10-26 23:13:44.5118+00:00,1ms789\\302\\265s325ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,200ms64\\302\\265s
61,2,2018-10-26 23:13:44.511803+00:00,1ms789\\302\\265s325ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,200ms67\\302\\265s
61,3,2018-10-26 23:13:44.511805+00:00,1ms789\\302\\265s325ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,200ms69\\302\\265s
61,4,2018-10-26 23:13:44.511808+00:00,1ms789\\302\\265s325ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,200ms72\\302\\265s
61,5,2018-10-26 23:13:44.51181+00:00,1ms789\\302\\265s325ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,200ms74\\302\\265s
61,6,2018-10-26 23:13:44.511814+00:00,1ms789\\302\\265s325ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,200ms78\\302\\265s
61,7,2018-10-26 23:13:44.513578+00:00,1ms789\\302\\265s325ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,201ms842\\302\\265s
4,20,2018-10-26 23:13:44.520791+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/7/0/1034/2/0-3},209ms55\\302\\265s
62,0,2018-10-26 23:13:44.520792+00:00,1ms855\\302\\265s867ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,209ms56\\302\\265s
63,0,2018-10-26 23:13:44.520796+00:00,1ms849\\302\\265s964ns,dist sender send,,,=== SPAN START: dist sender send ===,209ms60\\302\\265s
63,1,2018-10-26 23:13:44.520821+00:00,1ms849\\302\\265s964ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/7/0/1034/2/0,209ms85\\302\\265s
63,2,2018-10-26 23:13:44.52085+00:00,1ms849\\302\\265s964ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",209ms114\\302\\265s
63,3,2018-10-26 23:13:44.520852+00:00,1ms849\\302\\265s964ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,209ms116\\302\\265s
64,0,2018-10-26 23:13:44.520856+00:00,1ms788\\302\\265s527ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,209ms120\\302\\265s
64,1,2018-10-26 23:13:44.520858+00:00,1ms788\\302\\265s527ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,209ms122\\302\\265s
64,2,2018-10-26 23:13:44.520861+00:00,1ms788\\302\\265s527ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,209ms125\\302\\265s
64,3,2018-10-26 23:13:44.520866+00:00,1ms788\\302\\265s527ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,209ms130\\302\\265s
64,4,2018-10-26 23:13:44.520881+00:00,1ms788\\302\\265s527ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,209ms145\\302\\265s
64,5,2018-10-26 23:13:44.520887+00:00,1ms788\\302\\265s527ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,209ms151\\302\\265s
64,6,2018-10-26 23:13:44.520914+00:00,1ms788\\302\\265s527ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,209ms178\\302\\265s
64,7,2018-10-26 23:13:44.522635+00:00,1ms788\\302\\265s527ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,210ms899\\302\\265s
4,21,2018-10-26 23:13:44.52952+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/7/0/2049/12/0-3},217ms784\\302\\265s
65,0,2018-10-26 23:13:44.529521+00:00,1ms798\\302\\265s364ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,217ms785\\302\\265s
66,0,2018-10-26 23:13:44.529528+00:00,1ms790\\302\\265s109ns,dist sender send,,,=== SPAN START: dist sender send ===,217ms792\\302\\265s
66,1,2018-10-26 23:13:44.529535+00:00,1ms790\\302\\265s109ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/7/0/2049/12/0,217ms799\\302\\265s
66,2,2018-10-26 23:13:44.529542+00:00,1ms790\\302\\265s109ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",217ms806\\302\\265s
66,3,2018-10-26 23:13:44.529544+00:00,1ms790\\302\\265s109ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,217ms808\\302\\265s
67,0,2018-10-26 23:13:44.529547+00:00,1ms768\\302\\265s916ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,217ms811\\302\\265s
67,1,2018-10-26 23:13:44.529549+00:00,1ms768\\302\\265s916ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,217ms813\\302\\265s
67,2,2018-10-26 23:13:44.529552+00:00,1ms768\\302\\265s916ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,217ms816\\302\\265s
67,3,2018-10-26 23:13:44.529554+00:00,1ms768\\302\\265s916ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,217ms818\\302\\265s
67,4,2018-10-26 23:13:44.529556+00:00,1ms768\\302\\265s916ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,217ms820\\302\\265s
67,5,2018-10-26 23:13:44.529559+00:00,1ms768\\302\\265s916ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,217ms823\\302\\265s
67,6,2018-10-26 23:13:44.529562+00:00,1ms768\\302\\265s916ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,217ms826\\302\\265s
67,7,2018-10-26 23:13:44.531307+00:00,1ms768\\302\\265s916ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,219ms571\\302\\265s
4,22,2018-10-26 23:13:44.53953+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/8/0/53/6/0-3},227ms794\\302\\265s
68,0,2018-10-26 23:13:44.539531+00:00,2ms164\\302\\265s290ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,227ms795\\302\\265s
69,0,2018-10-26 23:13:44.539537+00:00,2ms156\\302\\265s770ns,dist sender send,,,=== SPAN START: dist sender send ===,227ms801\\302\\265s
69,1,2018-10-26 23:13:44.539547+00:00,2ms156\\302\\265s770ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/8/0/53/6/0,227ms811\\302\\265s
69,2,2018-10-26 23:13:44.539555+00:00,2ms156\\302\\265s770ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",227ms819\\302\\265s
69,3,2018-10-26 23:13:44.539557+00:00,2ms156\\302\\265s770ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,227ms821\\302\\265s
70,0,2018-10-26 23:13:44.539558+00:00,2ms133\\302\\265s158ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,227ms822\\302\\265s
70,1,2018-10-26 23:13:44.53956+00:00,2ms133\\302\\265s158ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,227ms824\\302\\265s
70,2,2018-10-26 23:13:44.539563+00:00,2ms133\\302\\265s158ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,227ms827\\302\\265s
70,3,2018-10-26 23:13:44.539568+00:00,2ms133\\302\\265s158ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,227ms832\\302\\265s
70,4,2018-10-26 23:13:44.539573+00:00,2ms133\\302\\265s158ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,227ms837\\302\\265s
70,5,2018-10-26 23:13:44.539595+00:00,2ms133\\302\\265s158ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,227ms859\\302\\265s
70,6,2018-10-26 23:13:44.5396+00:00,2ms133\\302\\265s158ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,227ms864\\302\\265s
70,7,2018-10-26 23:13:44.541681+00:00,2ms133\\302\\265s158ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,229ms945\\302\\265s
4,23,2018-10-26 23:13:44.5492+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/8/0/1065/15/0-3},237ms464\\302\\265s
71,0,2018-10-26 23:13:44.549202+00:00,1ms989\\302\\265s138ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,237ms466\\302\\265s
72,0,2018-10-26 23:13:44.549211+00:00,1ms977\\302\\265s822ns,dist sender send,,,=== SPAN START: dist sender send ===,237ms475\\302\\265s
72,1,2018-10-26 23:13:44.549226+00:00,1ms977\\302\\265s822ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/8/0/1065/15/0,237ms490\\302\\265s
72,2,2018-10-26 23:13:44.54924+00:00,1ms977\\302\\265s822ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",237ms504\\302\\265s
72,3,2018-10-26 23:13:44.549242+00:00,1ms977\\302\\265s822ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,237ms506\\302\\265s
73,0,2018-10-26 23:13:44.549244+00:00,1ms941\\302\\265s892ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,237ms508\\302\\265s
73,1,2018-10-26 23:13:44.549246+00:00,1ms941\\302\\265s892ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,237ms510\\302\\265s
73,2,2018-10-26 23:13:44.549249+00:00,1ms941\\302\\265s892ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,237ms513\\302\\265s
73,3,2018-10-26 23:13:44.549254+00:00,1ms941\\302\\265s892ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,237ms518\\302\\265s
73,4,2018-10-26 23:13:44.549257+00:00,1ms941\\302\\265s892ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,237ms521\\302\\265s
73,5,2018-10-26 23:13:44.549261+00:00,1ms941\\302\\265s892ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,237ms525\\302\\265s
73,6,2018-10-26 23:13:44.549266+00:00,1ms941\\302\\265s892ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,237ms530\\302\\265s
73,7,2018-10-26 23:13:44.551169+00:00,1ms941\\302\\265s892ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,239ms433\\302\\265s
4,24,2018-10-26 23:13:44.558656+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/8/0/2056/2/0-3},246ms920\\302\\265s
74,0,2018-10-26 23:13:44.558659+00:00,1ms896\\302\\265s603ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,246ms923\\302\\265s
75,0,2018-10-26 23:13:44.558668+00:00,1ms885\\302\\265s490ns,dist sender send,,,=== SPAN START: dist sender send ===,246ms932\\302\\265s
75,1,2018-10-26 23:13:44.558675+00:00,1ms885\\302\\265s490ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/8/0/2056/2/0,246ms939\\302\\265s
75,2,2018-10-26 23:13:44.558689+00:00,1ms885\\302\\265s490ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",246ms953\\302\\265s
75,3,2018-10-26 23:13:44.55869+00:00,1ms885\\302\\265s490ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,246ms954\\302\\265s
76,0,2018-10-26 23:13:44.558693+00:00,1ms857\\302\\265s582ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,246ms957\\302\\265s
76,1,2018-10-26 23:13:44.558698+00:00,1ms857\\302\\265s582ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,246ms962\\302\\265s
76,2,2018-10-26 23:13:44.558702+00:00,1ms857\\302\\265s582ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,246ms966\\302\\265s
76,3,2018-10-26 23:13:44.558706+00:00,1ms857\\302\\265s582ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,246ms970\\302\\265s
76,4,2018-10-26 23:13:44.558709+00:00,1ms857\\302\\265s582ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,246ms973\\302\\265s
76,5,2018-10-26 23:13:44.558713+00:00,1ms857\\302\\265s582ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,246ms977\\302\\265s
76,6,2018-10-26 23:13:44.558718+00:00,1ms857\\302\\265s582ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,246ms982\\302\\265s
76,7,2018-10-26 23:13:44.560537+00:00,1ms857\\302\\265s582ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,248ms801\\302\\265s
4,25,2018-10-26 23:13:44.567827+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/9/0/54/7/0-3},256ms91\\302\\265s
77,0,2018-10-26 23:13:44.567828+00:00,1ms809\\302\\265s869ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,256ms92\\302\\265s
78,0,2018-10-26 23:13:44.567833+00:00,1ms803\\302\\265s557ns,dist sender send,,,=== SPAN START: dist sender send ===,256ms97\\302\\265s
78,1,2018-10-26 23:13:44.567843+00:00,1ms803\\302\\265s557ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/9/0/54/7/0,256ms107\\302\\265s
78,2,2018-10-26 23:13:44.567867+00:00,1ms803\\302\\265s557ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",256ms131\\302\\265s
78,3,2018-10-26 23:13:44.567869+00:00,1ms803\\302\\265s557ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,256ms133\\302\\265s
79,0,2018-10-26 23:13:44.56787+00:00,1ms764\\302\\265s247ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,256ms134\\302\\265s
79,1,2018-10-26 23:13:44.567872+00:00,1ms764\\302\\265s247ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,256ms136\\302\\265s
79,2,2018-10-26 23:13:44.567875+00:00,1ms764\\302\\265s247ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,256ms139\\302\\265s
79,3,2018-10-26 23:13:44.567879+00:00,1ms764\\302\\265s247ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,256ms143\\302\\265s
79,4,2018-10-26 23:13:44.567881+00:00,1ms764\\302\\265s247ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,256ms145\\302\\265s
79,5,2018-10-26 23:13:44.567884+00:00,1ms764\\302\\265s247ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,256ms148\\302\\265s
79,6,2018-10-26 23:13:44.56789+00:00,1ms764\\302\\265s247ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,256ms154\\302\\265s
79,7,2018-10-26 23:13:44.569625+00:00,1ms764\\302\\265s247ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,257ms889\\302\\265s
4,26,2018-10-26 23:13:44.577153+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/9/0/1049/8/0-3},265ms417\\302\\265s
80,0,2018-10-26 23:13:44.577155+00:00,1ms827\\302\\265s331ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,265ms419\\302\\265s
81,0,2018-10-26 23:13:44.57716+00:00,1ms820\\302\\265s724ns,dist sender send,,,=== SPAN START: dist sender send ===,265ms424\\302\\265s
81,1,2018-10-26 23:13:44.57717+00:00,1ms820\\302\\265s724ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/9/0/1049/8/0,265ms434\\302\\265s
81,2,2018-10-26 23:13:44.577179+00:00,1ms820\\302\\265s724ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",265ms443\\302\\265s
81,3,2018-10-26 23:13:44.577181+00:00,1ms820\\302\\265s724ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,265ms445\\302\\265s
82,0,2018-10-26 23:13:44.577182+00:00,1ms796\\302\\265s137ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,265ms446\\302\\265s
82,1,2018-10-26 23:13:44.577184+00:00,1ms796\\302\\265s137ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,265ms448\\302\\265s
82,2,2018-10-26 23:13:44.577187+00:00,1ms796\\302\\265s137ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,265ms451\\302\\265s
82,3,2018-10-26 23:13:44.57719+00:00,1ms796\\302\\265s137ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,265ms454\\302\\265s
82,4,2018-10-26 23:13:44.577193+00:00,1ms796\\302\\265s137ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,265ms457\\302\\265s
82,5,2018-10-26 23:13:44.577195+00:00,1ms796\\302\\265s137ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,265ms459\\302\\265s
82,6,2018-10-26 23:13:44.577199+00:00,1ms796\\302\\265s137ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,265ms463\\302\\265s
82,7,2018-10-26 23:13:44.578968+00:00,1ms796\\302\\265s137ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,267ms232\\302\\265s
4,27,2018-10-26 23:13:44.587354+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/9/0/2041/5/0-3},275ms618\\302\\265s
83,0,2018-10-26 23:13:44.587357+00:00,2ms190\\302\\265s483ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,275ms621\\302\\265s
84,0,2018-10-26 23:13:44.587372+00:00,2ms172\\302\\265s472ns,dist sender send,,,=== SPAN START: dist sender send ===,275ms636\\302\\265s
84,1,2018-10-26 23:13:44.587382+00:00,2ms172\\302\\265s472ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/9/0/2041/5/0,275ms646\\302\\265s
84,2,2018-10-26 23:13:44.587399+00:00,2ms172\\302\\265s472ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",275ms663\\302\\265s
84,3,2018-10-26 23:13:44.587401+00:00,2ms172\\302\\265s472ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,275ms665\\302\\265s
85,0,2018-10-26 23:13:44.587404+00:00,2ms136\\302\\265s914ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,275ms668\\302\\265s
85,1,2018-10-26 23:13:44.587415+00:00,2ms136\\302\\265s914ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,275ms679\\302\\265s
85,2,2018-10-26 23:13:44.587419+00:00,2ms136\\302\\265s914ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,275ms683\\302\\265s
85,3,2018-10-26 23:13:44.587424+00:00,2ms136\\302\\265s914ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,275ms688\\302\\265s
85,4,2018-10-26 23:13:44.587431+00:00,2ms136\\302\\265s914ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,275ms695\\302\\265s
85,5,2018-10-26 23:13:44.587436+00:00,2ms136\\302\\265s914ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,275ms700\\302\\265s
85,6,2018-10-26 23:13:44.587444+00:00,2ms136\\302\\265s914ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,275ms708\\302\\265s
85,7,2018-10-26 23:13:44.589524+00:00,2ms136\\302\\265s914ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,277ms788\\302\\265s
4,28,2018-10-26 23:13:44.597707+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/10/0/32/3/0-3},285ms971\\302\\265s
86,0,2018-10-26 23:13:44.597709+00:00,2ms85\\302\\265s465ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,285ms973\\302\\265s
87,0,2018-10-26 23:13:44.597715+00:00,2ms77\\302\\265s435ns,dist sender send,,,=== SPAN START: dist sender send ===,285ms979\\302\\265s
87,1,2018-10-26 23:13:44.597722+00:00,2ms77\\302\\265s435ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/10/0/32/3/0,285ms986\\302\\265s
87,2,2018-10-26 23:13:44.597734+00:00,2ms77\\302\\265s435ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",285ms998\\302\\265s
87,3,2018-10-26 23:13:44.597736+00:00,2ms77\\302\\265s435ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,286ms
88,0,2018-10-26 23:13:44.597737+00:00,2ms52\\302\\265s894ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,286ms1\\302\\265s
88,1,2018-10-26 23:13:44.597739+00:00,2ms52\\302\\265s894ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,286ms3\\302\\265s
88,2,2018-10-26 23:13:44.597742+00:00,2ms52\\302\\265s894ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,286ms6\\302\\265s
88,3,2018-10-26 23:13:44.597749+00:00,2ms52\\302\\265s894ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,286ms13\\302\\265s
88,4,2018-10-26 23:13:44.597752+00:00,2ms52\\302\\265s894ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,286ms16\\302\\265s
88,5,2018-10-26 23:13:44.597756+00:00,2ms52\\302\\265s894ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,286ms20\\302\\265s
88,6,2018-10-26 23:13:44.59776+00:00,2ms52\\302\\265s894ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,286ms24\\302\\265s
88,7,2018-10-26 23:13:44.59978+00:00,2ms52\\302\\265s894ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,288ms44\\302\\265s
4,29,2018-10-26 23:13:44.608413+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/10/0/1031/8/0-3},296ms677\\302\\265s
89,0,2018-10-26 23:13:44.608415+00:00,1ms973\\302\\265s536ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,296ms679\\302\\265s
90,0,2018-10-26 23:13:44.60844+00:00,1ms947\\302\\265s32ns,dist sender send,,,=== SPAN START: dist sender send ===,296ms704\\302\\265s
90,1,2018-10-26 23:13:44.608448+00:00,1ms947\\302\\265s32ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/10/0/1031/8/0,296ms712\\302\\265s
90,2,2018-10-26 23:13:44.608471+00:00,1ms947\\302\\265s32ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",296ms735\\302\\265s
90,3,2018-10-26 23:13:44.608473+00:00,1ms947\\302\\265s32ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,296ms737\\302\\265s
91,0,2018-10-26 23:13:44.608475+00:00,1ms910\\302\\265s235ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,296ms739\\302\\265s
91,1,2018-10-26 23:13:44.608476+00:00,1ms910\\302\\265s235ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,296ms740\\302\\265s
91,2,2018-10-26 23:13:44.608479+00:00,1ms910\\302\\265s235ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,296ms743\\302\\265s
91,3,2018-10-26 23:13:44.608483+00:00,1ms910\\302\\265s235ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,296ms747\\302\\265s
91,4,2018-10-26 23:13:44.608485+00:00,1ms910\\302\\265s235ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,296ms749\\302\\265s
91,5,2018-10-26 23:13:44.608488+00:00,1ms910\\302\\265s235ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,296ms752\\302\\265s
91,6,2018-10-26 23:13:44.608493+00:00,1ms910\\302\\265s235ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,296ms757\\302\\265s
91,7,2018-10-26 23:13:44.610373+00:00,1ms910\\302\\265s235ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,298ms637\\302\\265s
4,30,2018-10-26 23:13:44.618634+00:00,1ns,table reader,,"[n1,client=[::1]:61834,user=root]",Scan /Table/53/{2/0/10/0/2020/3/0-3},306ms898\\302\\265s
92,0,2018-10-26 23:13:44.618636+00:00,1ms877\\302\\265s731ns,txn coordinator send,,,=== SPAN START: txn coordinator send ===,306ms900\\302\\265s
93,0,2018-10-26 23:13:44.618641+00:00,1ms870\\302\\265s567ns,dist sender send,,,=== SPAN START: dist sender send ===,306ms905\\302\\265s
93,1,2018-10-26 23:13:44.618652+00:00,1ms870\\302\\265s567ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",querying next range at /Table/53/2/0/10/0/2020/3/0,306ms916\\302\\265s
93,2,2018-10-26 23:13:44.618661+00:00,1ms870\\302\\265s567ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]","r58: sending batch 1 Scan to (n1,s1):1",306ms925\\302\\265s
93,3,2018-10-26 23:13:44.618663+00:00,1ms870\\302\\265s567ns,dist sender send,,"[n1,client=[::1]:61834,user=root,txn=cc09e45a]",sending request to local client,306ms927\\302\\265s
94,0,2018-10-26 23:13:44.618664+00:00,1ms845\\302\\265s122ns,/cockroach.roachpb.Internal/Batch,,,=== SPAN START: /cockroach.roachpb.Internal/Batch ===,306ms928\\302\\265s
94,1,2018-10-26 23:13:44.618666+00:00,1ms845\\302\\265s122ns,/cockroach.roachpb.Internal/Batch,,[n1],1 Scan,306ms930\\302\\265s
94,2,2018-10-26 23:13:44.618669+00:00,1ms845\\302\\265s122ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1]",executing 1 requests,306ms933\\302\\265s
94,3,2018-10-26 23:13:44.618675+00:00,1ms845\\302\\265s122ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read-only path,306ms939\\302\\265s
94,4,2018-10-26 23:13:44.618682+00:00,1ms845\\302\\265s122ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read has no clock uncertainty,306ms946\\302\\265s
94,5,2018-10-26 23:13:44.618685+00:00,1ms845\\302\\265s122ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",command queue,306ms949\\302\\265s
94,6,2018-10-26 23:13:44.618689+00:00,1ms845\\302\\265s122ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",waiting for read lock,306ms953\\302\\265s
94,7,2018-10-26 23:13:44.620497+00:00,1ms845\\302\\265s122ns,/cockroach.roachpb.Internal/Batch,,"[n1,s1,r58/1:/Table/5{3/2-4}]",read completed,308ms761\\302\\265s
95,0,2018-10-26 23:13:44.315579+00:00,1ns,hash aggregator,,,"=== SPAN START: hash aggregator ===
cockroach.processorid: 1
cockroach.stat.aggregator.input.rows: 299890
cockroach.stat.aggregator.mem.max: 10 KiB
cockroach.stat.aggregator.stalltime: 224.734ms",3ms843\\302\\265s
95,1,2018-10-26 23:13:44.628886+00:00,1ns,hash aggregator,,"[n1,client=[::1]:61834,user=root]",accumulation complete,317ms150\\302\\265s
3,2,2018-10-26 23:13:44.628913+00:00,316ms798\\302\\265s504ns,flow,,"[n1,client=[::1]:61834,user=root]",exiting aggregator,317ms177\\302\\265s
1,14,2018-10-26 23:13:44.628929+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",execution ends,317ms193\\302\\265s
1,15,2018-10-26 23:13:44.62893+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",rows affected: 15,317ms194\\302\\265s
1,16,2018-10-26 23:13:44.62897+00:00,317ms174\\302\\265s387ns,sql txn,,"[n1,client=[::1]:61834,user=root]",AutoCommit. err: <nil>,317ms234\\302\\265s
0,3,2018-10-26 23:13:44.628981+00:00,317ms262\\302\\265s575ns,session recording,,"[n1,client=[::1]:61834,user=root]",releasing 1 tables,317ms245\\302\\265s
0,4,2018-10-26 23:13:44.628991+00:00,317ms262\\302\\265s575ns,session recording,,"[n1,client=[::1]:61834,user=root]",[NoTxn pos:46] executing ExecStmt: SET TRACING = off,317ms255\\302\\265s
0,5,2018-10-26 23:13:44.628995+00:00,317ms262\\302\\265s575ns,session recording,,"[n1,client=[::1]:61834,user=root]",executing: SET TRACING = off in state: NoTxn,317ms259\\302\\265s
`;
