module.exports = function (length) {
	return Array.from({ length: length  }, (_, i) => {
 		let t;
 		if (i % 2 === 0 ) {
			 t = -1 * Math.random() * i ;
		 } else {
			 t = Math.random() / ( i || 1 );
		 }
		 return t
	})
}

 
