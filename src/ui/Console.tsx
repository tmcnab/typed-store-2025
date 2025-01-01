export default function Console() {
	return (
		<form autoComplete='off'>
			<style scoped>{`		
				section {
					display: flex;
					justify-content: space-between;
				}

				input, textarea {
					font-size: 16px;
					padding: 0.25rem;
					width: 80vw;
				}

				textarea {
					min-height: 50vh;
					resize: vertical;
				}
			`}
			</style>
			<fieldset>
				<legend>New Session</legend>
				<section>
					<label>Name</label>
					<input name="name" placeholder="Session Name" required type="text" />
				</section>
				<section>
					<label>Query</label>
					<textarea name="query" required></textarea>
				</section>
				<section>
					<label></label>
					<button>Execute</button>
				</section>
			</fieldset>
		</form>
	)
}