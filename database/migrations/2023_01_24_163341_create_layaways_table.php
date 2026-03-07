<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('layaways', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_finish')->default(false);
            $table->string('customer_name');
            $table->string('customer_wa');
            $table->integer('tenor'); //1-36 month
            $table->string('project');
            $table->string('block');
            $table->integer('price');
            $table->string('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('layaways');
    }
};
