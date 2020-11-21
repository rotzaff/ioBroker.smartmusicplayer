/*
 * Created with @iobroker/create-adapter v1.30.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
import * as utils from '@iobroker/adapter-core';

// Load your modules here, e.g.:
// import * as fs from "fs";

class Smartmusicplayer extends utils.Adapter {
	public constructor(options: Partial<utils.AdapterOptions> = {}) {
		super({
			...options,
			name: 'smartmusicplayer',
		});
		this.on('ready', this.onReady.bind(this));
		this.on('stateChange', this.onStateChange.bind(this));
		// this.on('objectChange', this.onObjectChange.bind(this));
		// this.on('message', this.onMessage.bind(this));
		this.on('unload', this.onUnload.bind(this));
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	private async onReady(): Promise<void> {
		// Initialize your adapter here

		// The adapters config (in the instance object everything under the attribute "native") is accessible via
		// this.config:
		this.log.info('config option1: ' + this.config.option1);
		this.log.info('config option2: ' + this.config.option2);

		/*
		For every state in the system there has to be also an object of type state
		Here a simple template for a boolean variable named "testVariable"
		Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
		*/
		// await this.setObjectNotExistsAsync('testVariable', {
		// 	type: 'state',
		// 	common: {
		// 		name: 'testVariable',
		// 		type: 'boolean',
		// 		role: 'indicator',
		// 		read: true,
		// 		write: true,
		// 	},
		// 	native: {},
		// });

		await this.setObjectNotExistsAsync('devices.device1', {
			type: 'state',
			common: {
				name: 'device1',
				type: 'string',
				role: 'text',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		// Generals
		await this.setObjectNotExistsAsync('General.activeAlexa', {
			type: 'state',
			common: {
				name: 'activeAlexa',
				type: 'string',
				role: 'value',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('General.currentState', {
			type: 'state',
			common: {
				name: 'currentState',
				type: 'boolean',
				role: 'indicator',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('General.currentTitle', {
			type: 'state',
			common: {
				name: 'currentTitle',
				type: 'string',
				role: 'text',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('General.imageURL', {
			type: 'state',
			common: {
				name: 'imageURL',
				type: 'string',
				role: 'text',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('General.imageURL', {
			type: 'state',
			common: {
				name: 'imageURL',
				type: 'string',
				role: 'text',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('General.playlistToPlay', {
			type: 'state',
			common: {
				name: 'playlistToPlay',
				type: 'string',
				role: 'text',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('General.songToPlay', {
			type: 'state',
			common: {
				name: 'songToPlay',
				type: 'string',
				role: 'text',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('General.searchOption', {
			type: 'state',
			common: {
				name: 'searchOption',
				type: 'string',
				role: 'text',
				def: '',
				read: true,
				write: true,
			},
			native: {},
		});

		// Controls

		await this.setObjectNotExistsAsync('Control.controlForward', {
			type: 'state',
			common: {
				name: 'controlForward',
				type: 'boolean',
				role: 'button',
				def: 'false',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('Control.controlNext', {
			type: 'state',
			common: {
				name: 'controlNext',
				type: 'boolean',
				role: 'button',
				def: 'false',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('Control.controlPause', {
			type: 'state',
			common: {
				name: 'controlPause',
				type: 'boolean',
				role: 'button',
				def: 'false',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('Control.controlPlay', {
			type: 'state',
			common: {
				name: 'controlPlay',
				type: 'boolean',
				role: 'button',
				def: 'false',
				read: true,
				write: true,
			},
			native: {},
		});

		await this.setObjectNotExistsAsync('Control.controlPrevious', {
			type: 'state',
			common: {
				name: 'controlPrevious',
				type: 'boolean',
				role: 'button',
				def: 'false',
				read: true,
				write: true,
			},
			native: {},
		});
		// In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
		// Generals subs
		this.subscribeStates('devices.device1');
		this.subscribeStates('General.activeAlexa');
		this.subscribeStates('devices.currentState');
		this.subscribeStates('devices.currentTitle');
		this.subscribeStates('devices.imageURL');
		this.subscribeStates('devices.musicInput');
		this.subscribeStates('devices.playlistToPlay');
		this.subscribeStates('devices.songToPlay');
		this.subscribeStates('devices.searchOption');
		// Controll subs
		this.subscribeStates('control.controlForward');
		this.subscribeStates('control.controlNext');
		this.subscribeStates('control.controlPause');
		this.subscribeStates('control.controlPlay');
		this.subscribeStates('control.controlPrevious');

		// In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
		// this.subscribeStates('testVariable');
		// You can also add a subscription for multiple states. The following line watches all states starting with "lights."
		// this.subscribeStates('lights.*');
		// Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
		// this.subscribeStates('*');

		/*
			setState examples
			you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
		// the variable testVariable is set to true as command (ack=false)
		// await this.setStateAsync('testVariable', true);

		// same thing, but the value is flagged "ack"
		// ack should be always set to true if the value is received from or acknowledged from the target system
		// await this.setStateAsync('testVariable', { val: true, ack: true });

		// same thing, but the state is deleted after 30s (getState will return null afterwards)
		// await this.setStateAsync('testVariable', { val: true, ack: true, expire: 30 });

		// examples for the checkPassword/checkGroup functions
		// let result = await this.checkPasswordAsync('admin', 'iobroker');
		// this.log.info('check user admin pw iobroker: ' + result);

		// result = await this.checkGroupAsync('admin', 'admin');
		// this.log.info('check group user admin group admin: ' + result);
	}

	/**
	 * Is called when adapter shuts down - callback has to be called under any circumstances!
	 */
	private onUnload(callback: () => void): void {
		try {
			// Here you must clear all timeouts or intervals that may still be active
			// clearTimeout(timeout1);
			// clearTimeout(timeout2);
			// ...
			// clearInterval(interval1);

			callback();
		} catch (e) {
			callback();
		}
	}

	// If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
	// You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
	// /**
	//  * Is called if a subscribed object changes
	//  */
	// private onObjectChange(id: string, obj: ioBroker.Object | null | undefined): void {
	// 	if (obj) {
	// 		// The object was changed
	// 		this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
	// 	} else {
	// 		// The object was deleted
	// 		this.log.info(`object ${id} deleted`);
	// 	}
	// }

	/**
	 * Is called if a subscribed state changes
	 */
	private onStateChange(id: string, state: ioBroker.State | null | undefined): void {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

	// If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
	// /**
	//  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
	//  * Using this method requires "common.message" property to be set to true in io-package.json
	//  */
	// private onMessage(obj: ioBroker.Message): void {
	// 	if (typeof obj === 'object' && obj.message) {
	// 		if (obj.command === 'send') {
	// 			// e.g. send email or pushover or whatever
	// 			this.log.info('send command');

	// 			// Send response in callback if required
	// 			if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
	// 		}
	// 	}
	// }
}

if (module.parent) {
	// Export the constructor in compact mode
	module.exports = (options: Partial<utils.AdapterOptions> | undefined) => new Smartmusicplayer(options);
} else {
	// otherwise start the instance directly
	(() => new Smartmusicplayer())();
}
