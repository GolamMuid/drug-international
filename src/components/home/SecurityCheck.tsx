import styles from "@/styles/Security.module.css";
import ButtonSecondary from "../ui/ButtonSecondary";

function SecurityCheck() {
	return (
		<div className={`${styles.background} mb-8 md:mb-32`}>
			<div className={`container px-4 z-10 relative m-auto text-white`}>
				<div className="text-center font-semibold text-4xl py-10 uppercase">
					Security Check
				</div>

				<div className="py-[40px] md:py-[80px]">
					<div className="bg-primary opacity-80 h-[460px] rounded-xl">
						<div className="p-10 text-center">
							<p className="text-2xl font-medium mb-6">
								Verify Medicine Security Code
							</p>
							<div className="flex flex-col items-center justify-center gap-4 mx-auto mb-12 md:flex-row">
								<input className="h-12 w-[40%] min-w-[260px] text-black p-2 rounded-md" />
								<ButtonSecondary> VERIFY </ButtonSecondary>
							</div>
							<p className="text-lg font-medium ">Security Check Information</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SecurityCheck;
