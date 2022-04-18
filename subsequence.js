function isValidSubsequence(array, sequence) {
	
	var arrayidx = 0;
	var seqidx = 0;
	
	while (arrayidx < array.length && seqidx < sequence.length){
		if (array[arrayidx] === sequence[seqidx])
			{
				seqidx++;
			}
		arrayidx++;
	}
	return seqidx === sequence.length;
	}