<?php
/**
 * Functions and shortcodes.
 *
 * @package CalculateGrades
 */

/**
 * Calculate grade form.
 */
function calculate_grades_form() { ?>
	<form class="calculate-grades" id="calculate-grades">
		<fieldset>
			<legend><?php esc_html_e( 'Common grade combinations', 'calculate-grades' ); ?></legend>
			<input type="radio" id="max-30" name="usual-max-points" value="30" data-min-points="6" checked="checked">
			<label for="max-30"><?php esc_html_e( 'Max. points 30', 'calculate-grades' ); ?></label><br>

			<input type="radio" id="max-36" name="usual-max-points" value="36" data-min-points="7">
			<label for="max-36"><?php esc_html_e( 'Max. points 36', 'calculate-grades' ); ?></label><br>

			<input type="radio" id="max-42" name="usual-max-points" value="42" data-min-points="8">
			<label for="max-42"><?php esc_html_e( 'Max. points 42', 'calculate-grades' ); ?></label><br>

			<input type="radio" id="max-48" name="usual-max-points" value="48" data-min-points="10">
			<label for="max-48"><?php esc_html_e( 'Max. points 48', 'calculate-grades' ); ?></label>
		</fieldset>

		<p>
			<label for="max-points"><?php esc_html_e( 'Max points', 'calculate-grades' ); ?> <span class="required">*</span></label>
			<input type="number" id="max-points" name="max-points" value="30" required>
		</p>

		<p>
			<label for="min-points"><?php esc_html_e( 'Points for four', 'calculate-grades' ); ?> <span class="required">*</span></label>
			<input type="number" id="min-points" name="min-points" value="6" required>
		</p>

		<p>
			<label for="exam-points"><?php esc_html_e( 'Student points', 'calculate-grades' ); ?></label>
			<input type="number" id="exam-points" name="exam-points">
		</p>

		<input type="submit" value="<?php esc_html_e( 'Calculate', 'calculate-grades' ); ?>">
	</form>

	<div class="show-results" id="show-results"></div>
	<?php
}
