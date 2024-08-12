<?php

namespace Database\Factories;

use App\Models\Farm;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Animal>
 */
class AnimalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(
        Farm $farmId = null,
        int $animalNumber = null,
        string $typeName = null,
        int $years = null,
    ): array
    {
        return [
            'farm_id' => $farmId ?? Farm::factory(),
            'animal_number' => $animalNumber ?? $this->faker->unique()->randomNumber(),
            'type_name' => $typeName ?? $this->faker->name(),
            'years' => $years ?? $this->faker->randomNumber($nbDigits = 2, $strict = false),
        ];
    }
}
