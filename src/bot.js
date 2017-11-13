const LineConnect = require('./connect');
let LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: CYBER OPERATION TEAM\n\
Version: 0.2.2\n\
Terima Kasih Kepada @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : Ini Adalah AlphatJS Lama Buatan @Alfathdirk @TCR_TEAM Dan Ini Telah Dikembangin Oleh @TAB_TEAM Dan @Cyber Operation Team\nTolong Untuk Tidak Perjual-Belikan Script Ini!\n\
****C.O.T RUNNING****");

const auth = {
	authToken: 'EmeGUtgc8BFNUeRF9cd9.AfdsfZNb+Y36G5zWBVvT3z8EIq.lr8i199b3cf3TBwZuWtG+soB1uVO+i+T2Z1QuAyrdsY=',
	certificate: 'a19ae35e470502f8aa4c1c54fdfdsf81ed3b17761905836d08a1418bc08e5305c472f',
}
//let client =  new LineConnect(auth);
let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
