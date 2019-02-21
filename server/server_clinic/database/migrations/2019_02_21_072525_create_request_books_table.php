<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRequestBooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('request_books', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('clinic_id');
            $table->string('full_name');
            $table->string('mobile_number');
            $table->string('email');
            $table->date('appointment_date');
            $table->boolean('approved');
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
        Schema::dropIfExists('request_books');
    }
}
