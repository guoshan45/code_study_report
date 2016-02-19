a = 12222

def validate_ip_protocal(ip_proto):
	if isinstance(ip_proto, int):
		if ip_proto not in range(0, 256):
			print ("Not a valid IP protocol number")
    # if isinstance(ip_proto, str):
    	# if ip_proto not in ...:
    		# print ("Not a valid IP protocol string")

validate_ip_protocal(a)