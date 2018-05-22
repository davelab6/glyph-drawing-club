import { observable } from 'mobx';
import store from './CanvasStore';

class TypingModeStore {
	KEY_INTO_UNICODE = {
		'!': 33,
		'"': 34,
		'#': 35,
		'$': 36,
		'%': 37,
		'&': 38,
		"'": 39,
		'(': 40,
		')': 41,
		'*': 42,
		'+': 43,
		',': 44,
		'-': 45,
		'.': 46,
		'/': 47,
		'0': 48,
		'1': 49,
		'2': 50,
		'3': 51,
		'4': 52,
		'5': 53,
		'6': 54,
		'7': 55,
		'8': 56,
		'9': 57,
		':': 58,
		';': 59,
		'<': 60,
		'=': 61,
		'>': 62,
		'?': 63,
		'@': 64,
		'A': 65,
		'B': 66,
		'C': 67,
		'D': 68,
		'E': 69,
		'F': 70,
		'G': 71,
		'H': 72,
		'I': 73,
		'J': 74,
		'K': 75,
		'L': 76,
		'M': 77,
		'N': 78,
		'O': 79,
		'P': 80,
		'Q': 81,
		'R': 82,
		'S': 83,
		'T': 84,
		'U': 85,
		'V': 86,
		'W': 87,
		'X': 88,
		'Y': 89,
		'Z': 90,
		'[': 91,
		'\\': 92,
		']': 93,
		'^': 94,
		'_': 95,
		'`': 96,
		'a': 97,
		'b': 98,
		'c': 99,
		'd': 100,
		'e': 101,
		'f': 102,
		'g': 103,
		'h': 104,
		'i': 105,
		'j': 106,
		'k': 107,
		'l': 108,
		'm': 109,
		'n': 110,
		'o': 111,
		'p': 112,
		'q': 113,
		'r': 114,
		's': 115,
		't': 116,
		'u': 117,
		'v': 118,
		'w': 119,
		'x': 120,
		'y': 121,
		'z': 122,
		'{': 123,
		'|': 124,
		'}': 125,
		'¿': 191,
		'À': 192,
		'Á': 193,
		'Â': 194,
		'Ã': 195,
		'Ä': 196,
		'Å': 197,
		'Æ': 198,
		'Ç': 199,
		'È': 200,
		'É': 201,
		'Ê': 202,
		'Ë': 203,
		'Ì': 204,
		'Í': 205,
		'Î': 206,
		'Ï': 207,
		'Ð': 208,
		'Ñ': 209,
		'Ò': 210,
		'Ó': 211,
		'Ô': 212,
		'Õ': 213,
		'Ö': 214,
		'×': 215,
		'Ø': 216,
		'Ù': 217,
		'Ú': 218,
		'Û': 219,
		'Ü': 220,
		'Ý': 221,
		'Þ': 222,
		'ß': 223,
		'à': 224,
		'á': 225,
		'â': 226,
		'ã': 227,
		'ä': 228,
		'å': 229,
		'æ': 230,
		'ç': 231,
		'è': 232,
		'é': 233,
		'ê': 234,
		'ë': 235,
		'ì': 236,
		'í': 237,
		'î': 238,
		'ï': 239,
		'ð': 240,
		'ñ': 241,
		'ò': 242,
		'ó': 243,
		'ô': 244,
		'õ': 245,
		'ö': 246,
		'÷': 247,
		'ø': 248,
		'ù': 249,
		'ú': 250,
		'û': 251,
		'ü': 252,
		'ý': 253,
		'þ': 254,
		'ÿ': 255,
		' ': 32
	}
}
export default new TypingModeStore();