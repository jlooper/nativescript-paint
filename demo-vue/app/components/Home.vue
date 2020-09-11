<template>
  <Page>
    <ActionBar title="NativeScript-Paint for Vue" color="#fff" backgroundColor="#3489db"/>
    <ScrollView>
      <StackLayout backgroundColor="#D2D9E5">
        <PaintPad
          canvasColor="#fff"
          ref="paintPad"
          margin="10"
          width="280"
          height="280"
          :drawColor="drawColor"
          :drawWidth="drawWidth"
          :airBrushFlow="airBrushFlow"
          :drawOpacity="drawOpacity"
        />
        <Image
          :src="paintingImage"
          height="80"
          :visibility="paintingImage ? 'visible' : 'collapsed'"
          stretch="aspectFit"
        />

        <WrapLayout orientation="horizontal" horizontalAlignment="center">
          <Button text="Save" @tap="getMyPainting" class="btn btn-primary btn-rounded-sm"/>
          <Button text="Clear" @tap="clearMyPainting" class="btn btn-primary btn-rounded-sm"/>
          <Button text="Color" @tap="pickColor" class="btn btn-primary btn-rounded-sm"/>
          <Button
            android:visibility="collapse"
            text="Airbrush"
            @tap="selectAirBrush"
            class="btn btn-primary btn-rounded-sm"
          />
          <Button
            android:visibility="collapse"
            text="Paintbrush"
            @tap="selectPaintBrush"
            class="btn btn-primary btn-rounded-sm"
          />
        </WrapLayout>

        <GridLayout padding="10" rows="auto" columns="auto, *">
          <Label text="Width:" class="message" textWrap="true" row="0" col="0"/>
          <Label :text="drawWidth" class="message" textWrap="true" row="0" col="1"/>
        </GridLayout>
        <Slider
          margin="10"
          backgroundColor="#ff4801"
          id="widthSlider"
          :value="drawWidth"
          @valueChange="widthChange($event)"
          maxValue="50"
          minValue="1"
        />

        <GridLayout padding="10" rows="auto" columns="auto, *">
          <Label text="Opacity:" class="message" textWrap="true" row="0" col="0"/>
          <Label :text="drawOpacity" class="message" textWrap="true" row="0" col="1"/>
        </GridLayout>
        <Slider
          margin="10"
          backgroundColor="#ff4801"
          id="opacitySlider"
          :value="drawOpacity"
          :maxValue="maxOpacity"
          @valueChange="opacityChange($event)"
          minValue="0"
        />

        <GridLayout android:visibility="collapse" padding="10" rows="auto" columns="auto, *">
          <Label text="AirBrush Flow:" class="message" textWrap="true" row="0" col="0"/>
          <Label :text="airBrushFlow" class="message" textWrap="true" row="0" col="1"/>
        </GridLayout>
        <Slider
          android:visibility="collapse"
          margin="10"
          backgroundColor="#ff4801"
          id="airBrushFlowSlider"
          :value="airBrushFlow"
          @valueChange="airbrushFlowChange($event)"
          maxValue="1"
          minValue="0"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { PaintPad } from "nativescript-paint";
import { ColorPicker } from "nativescript-color-picker";
import * as platformModule from "@nativescript/core/platform";

export default {
  data() {
    return {
      drawWidth: 5,
      drawColor: "#3489db",
      drawOpacity: 0,
      maxOpacity: 0,
      airBrushFlow: 0.7,
      paintingImage: ""
    };
  },

  methods: {
    getMyPainting() {
      this.$refs.paintPad.nativeView.getPainting().then(img => {
        this.paintingImage = img;
      });
    },

    clearMyPainting() {
      this.$refs.paintPad.nativeView.clearPainting();
      this.paintingImage = null;
    },

    selectAirBrush() {
      this.$refs.paintPad.nativeView.setToolType(1);
    },

    selectPaintBrush() {
      this.$refs.paintPad.nativeView.setToolType(0);
    },

    widthChange(event){
      this.drawWidth = event.value
    },

    opacityChange(event){
      this.drawOpacity = event.value
    },

    airbrushFlowChange(event){
      this.airbrushFlowChange = event.value
    },

    pickColor() {
      this._colorPicker
        .show("#3489db", "HEX")
        .then(result => {
          this.drawColor = result;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    if (platformModule.isIOS) {
      this.drawOpacity = 1;
      this.maxOpacity = 1;
    } else {
      this.drawOpacity = 255;
      this.maxOpacity = 255;
    }
    this._colorPicker = new ColorPicker();
  }
};
</script>

