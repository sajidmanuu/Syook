const PORT = process.env.PORT || 1337;
const WEB_SOCKET_MAGIC_KEY = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";

const SEVEN_BIT_INTEGER_MARKER = 125;
const SIXTEEN_BIT_INTEGER_MARKER = 126;
const SIXTY_FOUR_BIT_INTEGER_MARKER = 127;

const FIRST_BIT = 128;

const MASK_KEY_BYTE_LENGTH = 4;

const OPCODE_UTF_ENCODING_INDICATOR = 0x01;
const FIN_VALUE = 0x80;

module.exports = {
  PORT,
  WEB_SOCKET_MAGIC_KEY,
  SEVEN_BIT_INTEGER_MARKER,
  SIXTEEN_BIT_INTEGER_MARKER,
  SIXTY_FOUR_BIT_INTEGER_MARKER,
  FIRST_BIT,
  MASK_KEY_BYTE_LENGTH,
  OPCODE_UTF_ENCODING_INDICATOR,
  FIN_VALUE,
};