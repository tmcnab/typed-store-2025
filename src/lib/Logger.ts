export enum LogLevel {
	CRITICAL = 'critical',
	DEBUG = 'debug',
	ERROR = 'error',
	INFO = 'info',
	WARNING = 'warning',
}

export type LogValue = boolean | null | number | object | string

export type LogEntry = {
	level: LogLevel
	timestamp: string
	value: LogValue
}

export class Logger
{
	#append (level: LogLevel, value: LogValue) {
		this.#data.add({
			level,
			timestamp: new Date().toISOString(),
			value,
		})
	}

	#data = new Set<LogEntry>()

	critical (value: LogValue) {
		this.#append(LogLevel.CRITICAL, value)
	}

	debug (value: LogValue) {
		this.#append(LogLevel.DEBUG, value)
	}

	error (value: LogValue) {
		this.#append(LogLevel.ERROR, value)
	}

	info (value: LogValue) {
		this.#append(LogLevel.INFO, value)
	}

	warning (value: LogValue) {
		this.#append(LogLevel.WARNING, value)
	}
}