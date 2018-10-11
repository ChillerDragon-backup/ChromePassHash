function hash_sha256(pw) {
  return sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(pw))
}
